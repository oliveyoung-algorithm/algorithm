def solution(s):
    answer = ''
    idx = 0
    
    for i in range(len(s)):
        if s[i] == ' ':
            answer += ' '
            idx = 0 # 공백 만나면 idx 초기화
        else:
            if idx % 2 == 0:
                answer += s[i].upper()
            else:
                answer += s[i].lower()
            idx += 1
            
    return answer