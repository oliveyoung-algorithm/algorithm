#!/usr/bin/env python3
"""
매일 01:00에 실행되어 각 참여자의 커밋을 확인하고,
- 어제 커밋이 없는 경우: 벌금 5000원
- 어제 커밋이 없었는데 오늘 00:00~01:00 사이에 커밋한 경우: 지각 3000원
Issue를 생성하고 README.md의 누적 적립금을 업데이트합니다.
"""

import os
import re
from datetime import datetime, timezone, timedelta
from github import Github
from dateutil import parser

# GitHub 토큰
GITHUB_TOKEN = os.environ.get('GITHUB_TOKEN')
if not GITHUB_TOKEN:
    raise ValueError("GITHUB_TOKEN 환경변수가 설정되지 않았습니다.")

# 레포지토리 정보 (GitHub Actions 환경변수에서 자동으로 가져옴)
GITHUB_REPOSITORY = os.environ.get('GITHUB_REPOSITORY', '')
if GITHUB_REPOSITORY and '/' in GITHUB_REPOSITORY:
    REPO_OWNER, REPO_NAME = GITHUB_REPOSITORY.split('/', 1)
else:
    REPO_OWNER = ''
    REPO_NAME = ''

# 참여자 정보 (이름: GitHub 사용자명)
PARTICIPANTS = {
    '박예진': 'uiop5809',
    '김지호': 'jihostudy',
    '심수연': 'letthem',
    '정건우': 'abcxj123',
    '공예영': 'yeyounging'
}

# 한국 시간대
KST = timezone(timedelta(hours=9))

def get_today_kst():
    """한국 시간 기준 오늘 날짜를 반환합니다."""
    return datetime.now(KST).date()

def check_user_commits(github, repo, participant_name, username, start_time, end_time):
    """특정 사용자가 특정 시간 범위에 커밋이 있는지 확인합니다.
    
    Args:
        github: GitHub API 인스턴스
        repo: Repository 객체
        participant_name: 참여자 이름 
        username: GitHub username
        start_time: 시작 시간 (KST)
        end_time: 종료 시간 (KST)
    """
    try:
        # UTC로 변환
        start_time_utc = start_time.astimezone(timezone.utc)
        end_time_utc = end_time.astimezone(timezone.utc)
        
        # 해당 시간 범위의 모든 커밋 가져오기
        all_commits = repo.get_commits(
            since=start_time_utc,
            until=end_time_utc
        )
        
        # 검색할 키워드들 (소문자로 변환)
        search_keywords = [
            participant_name.lower(),  # 예: '공예영'
            username.lower()  # 예: 'yeyounging'
        ]
        
        # 각 커밋의 author 정보 확인
        for commit in all_commits:
            # 1. GitHub author 정보 확인 (commit.author - GitHub 사용자)
            if commit.author and commit.author.login:
                author_login = commit.author.login.lower()
                if any(keyword in author_login for keyword in search_keywords):
                    return True
            
            # 2. Git commit author 정보 확인 (commit.commit.author - Git author)
            if commit.commit and commit.commit.author:
                git_author = commit.commit.author
                
                # Git author name 확인
                if git_author.name:
                    git_name = git_author.name.lower()
                    if any(keyword in git_name for keyword in search_keywords):
                        return True
                
                # Git author email 확인
                if git_author.email:
                    git_email = git_author.email.lower()
                    if any(keyword in git_email for keyword in search_keywords):
                        return True
        
        return False
        
    except Exception as e:
        print(f"  ⚠️  오류: {e}")
        return False

def create_issue(github, repo, participant_name, date_str, penalty_type, amount):
    """미제출자 또는 지각자에 대한 Issue를 생성합니다."""
    if penalty_type == 'late':
        title = f"⏰ {date_str} 지각: {participant_name}"
        body = f"""
## 지각 알림

**날짜**: {date_str}
**참여자**: {participant_name}

{participant_name}님은 {date_str}에 커밋이 없었지만, 다음 날 00:00~01:00 사이에 커밋을 완료했습니다.

스터디 규칙에 따라 **3,000원**이 누적 적립금에 추가되었습니다.

---

*이 Issue는 자동으로 생성되었습니다.*
"""
        labels = ['지각', '자동생성']
    else:  # penalty_type == 'no_commit'
        title = f"⚠️ {date_str} 미제출: {participant_name}"
        body = f"""
## 미제출 알림

**날짜**: {date_str}
**참여자**: {participant_name}

{participant_name}님은 {date_str}에 커밋이 확인되지 않았습니다.

스터디 규칙에 따라 **5,000원**이 누적 적립금에 추가되었습니다.

---

*이 Issue는 자동으로 생성되었습니다.*
"""
        labels = ['미제출', '자동생성']
    
    try:
        issue = repo.create_issue(
            title=title,
            body=body,
            labels=labels
        )
        print(f"✅ 완료 (Issue #{issue.number})")
        return issue
    except Exception as e:
        print(f"❌ 실패: {e}")
        return None

def update_readme_penalty(participant_name, amount=5000):
    """README.md의 누적 적립금을 업데이트합니다."""
    # README.md 경로 확인 (src/README.md 또는 README.md)
    readme_path = 'src/README.md' if os.path.exists('src/README.md') else 'README.md'
    
    try:
        with open(readme_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 누적 적립금 섹션 찾기
        pattern = rf'(\| {re.escape(participant_name)} \| )(\d+)원'
        
        def replace_amount(match):
            current_amount = int(match.group(2))
            new_amount = current_amount + amount
            return f'{match.group(1)}{new_amount}원'
        
        new_content = re.sub(pattern, replace_amount, content)
        
        if new_content != content:
            with open(readme_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            # 로그는 호출하는 쪽에서 출력하므로 여기서는 출력하지 않음
            return True
        else:
            print(f"❌ 실패: {participant_name}님을 찾을 수 없습니다.")
            return False
            
    except Exception as e:
        print(f"README.md 업데이트 중 오류 발생: {e}")
        return False

def main():
    """메인 함수"""
    # GitHub API 초기화
    g = Github(GITHUB_TOKEN)
    
    # 레포지토리 정보 확인
    if not REPO_OWNER or not REPO_NAME:
        print("레포지토리 정보를 찾을 수 없습니다. GITHUB_REPOSITORY 환경변수를 확인해주세요.")
        return
    
    repo_owner = REPO_OWNER
    repo_name = REPO_NAME
    
    try:
        repo = g.get_repo(f"{repo_owner}/{repo_name}")
    except Exception as e:
        print(f"레포지토리 접근 중 오류 발생: {e}")
        return
    
    # 확인할 날짜 (어제 날짜, 한국 시간 기준)
    # 워크플로우가 01:00에 실행되므로 어제 날짜의 커밋을 확인
    today = get_today_kst()
    yesterday = today - timedelta(days=1)
    date_str = yesterday.strftime('%Y년 %m월 %d일')
    
    print(f"{'='*60}")
    print(f"📅 {date_str} 커밋 확인 시작")
    print(f"{'='*60}")
    
    # 주말 체크 (평일만 확인)
    weekday = yesterday.weekday()  # 0=월요일, 6=일요일
    if weekday >= 5:  # 토요일(5) 또는 일요일(6)
        weekday_name = "토요일" if weekday == 5 else "일요일"
        print(f"\nℹ️  {date_str}는 {weekday_name}입니다.")
        print(f"   스터디 규칙에 따라 확인을 건너뜁니다.")
        print(f"\n{'='*60}")
        return
    
    # 어제 날짜의 시간 범위 (00:00:00 ~ 23:59:59)
    yesterday_start = datetime.combine(yesterday, datetime.min.time()).replace(tzinfo=KST)
    yesterday_end = datetime.combine(today, datetime.min.time()).replace(tzinfo=KST)  # 오늘 00:00:00
    
    # 오늘 00:00~01:00 사이의 시간 범위 (지각 체크용)
    from datetime import time as dt_time
    today_start = datetime.combine(today, dt_time(0, 0, 0)).replace(tzinfo=KST)  # 오늘 00:00:00
    today_01_00 = datetime.combine(today, dt_time(1, 0, 0)).replace(tzinfo=KST)  # 오늘 01:00:00
    
    no_commit_participants = []  # 어제 커밋이 없는 사람들
    late_participants = []  # 어제 커밋이 없었는데 오늘 00:00~01:00 사이에 커밋한 사람들
    
    # 각 참여자의 커밋 확인
    print(f"\n📋 총 {len(PARTICIPANTS)}명의 참여자 커밋 확인 시작\n")
    
    for idx, (name, github_username) in enumerate(PARTICIPANTS.items(), 1):
        print(f"[{idx}/{len(PARTICIPANTS)}] Checking {name} (@{github_username})...")
        
        # 어제 커밋 확인
        print(f"  → 어제 ({yesterday.strftime('%Y-%m-%d')}) 커밋 확인 중...", end=" ")
        has_yesterday_commit = check_user_commits(g, repo, name, github_username, yesterday_start, yesterday_end)
        
        if not has_yesterday_commit:
            print("❌ 없음")
            no_commit_participants.append(name)
            
            # 오늘 00:00~01:00 사이에 커밋이 있는지 확인 (지각 체크)
            print(f"  → 오늘 00:00~01:00 사이 커밋 확인 중...", end=" ")
            has_today_early_commit = check_user_commits(g, repo, name, github_username, today_start, today_01_00)
            
            if has_today_early_commit:
                print("✅ 있음 (지각)")
                late_participants.append(name)
            else:
                print("❌ 없음 (미제출)")
        else:
            print("✅ 있음")
            print(f"  → 상태: 정상 완료")
    
    # 처리할 참여자들
    penalty_participants = []  # 벌금 5000원 (어제 커밋 없음 + 오늘 00:00~01:00 사이에도 커밋 없음)
    
    for participant in no_commit_participants:
        if participant not in late_participants:
            penalty_participants.append(participant)
    
    # 벌금 처리 (어제 커밋 없음 = 5000원)
    if penalty_participants:
        print(f"\n{'='*60}")
        print(f"⚠️  미제출자 {len(penalty_participants)}명 발견 (벌금 5,000원)")
        print(f"{'='*60}")
        
        for participant_name in penalty_participants:
            print(f"\n📌 처리 중: {participant_name}")
            print(f"  → Issue 생성 중...", end=" ")
            # Issue 생성
            create_issue(g, repo, participant_name, date_str, 'no_commit', 5000)
            print(f"  → README.md 업데이트 중...", end=" ")
            # README.md 업데이트
            if update_readme_penalty(participant_name, 5000):
                print("✅ 완료")
            else:
                print("❌ 실패")
    
    # 지각 처리 (어제 커밋 없음 + 오늘 00:00~01:00 사이 커밋 있음 = 3000원)
    if late_participants:
        print(f"\n{'='*60}")
        print(f"⏰ 지각자 {len(late_participants)}명 발견 (지각 3,000원)")
        print(f"{'='*60}")
        
        for participant_name in late_participants:
            print(f"\n📌 처리 중: {participant_name}")
            print(f"  → Issue 생성 중...", end=" ")
            # Issue 생성
            create_issue(g, repo, participant_name, date_str, 'late', 3000)
            print(f"  → README.md 업데이트 중...", end=" ")
            # README.md 업데이트
            if update_readme_penalty(participant_name, 3000):
                print("✅ 완료")
            else:
                print("❌ 실패")
    
    # 변경사항 커밋
    if penalty_participants or late_participants:
        print(f"\n{'='*60}")
        print(f"💾 README.md 변경사항 커밋 중...")
        print(f"{'='*60}")
        try:
            import subprocess
            print(f"  → Git 설정 중...", end=" ")
            subprocess.run(['git', 'config', 'user.name', 'github-actions[bot]'], check=True)
            subprocess.run(['git', 'config', 'user.email', 'github-actions[bot]@users.noreply.github.com'], check=True)
            print("✅ 완료")
            
            print(f"  → 파일 스테이징 중...", end=" ")
            # README.md 경로 확인
            readme_git_path = 'src/README.md' if os.path.exists('src/README.md') else 'README.md'
            subprocess.run(['git', 'add', readme_git_path], check=True)
            print("✅ 완료")
            
            commit_message = f'[자동] {date_str} 누적 적립금 업데이트'
            if penalty_participants:
                commit_message += f' (미제출: {", ".join(penalty_participants)})'
            if late_participants:
                commit_message += f' (지각: {", ".join(late_participants)})'
            
            print(f"  → 커밋 생성 중...", end=" ")
            subprocess.run(['git', 'commit', '-m', commit_message], check=True)
            print("✅ 완료")
            
            print(f"  → 원격 저장소에 푸시 중...", end=" ")
            subprocess.run(['git', 'push'], check=True)
            print("✅ 완료")
            print(f"\n✅ README.md 변경사항이 성공적으로 커밋되었습니다.")
        except Exception as e:
            print(f"\n⚠️ README.md 커밋 중 오류 발생: {e}")
    else:
        print(f"\n{'='*60}")
        print(f"✅ 모든 참여자가 커밋을 완료했습니다!")
        print(f"{'='*60}")
    
    print(f"\n{'='*60}")
    print(f"🎉 {date_str} 커밋 확인 완료")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()

