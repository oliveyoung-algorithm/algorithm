# https://www.acmicpc.net/problem/15663
# N과 M (9) , 실버2

import sys
sys.stdin = open("./input.txt",'r')

# 입력 받기
N, M = map(int, input().split())
numbers = sorted(list(map(int, input().split())))

visited = [False] * N  # 각 인덱스의 사용 여부 체크
answer = []            # 현재 탐색 중인 수열

def dfs():
  if len(answer) == M:
    print(*answer)
    return

  last_used = 0  # 현재 depth에서 마지막으로 선택한 숫자 초기화
  
  for i in range(N):
    # 1. 이미 사용한 인덱스이거나
    # 2. 현재 depth에서 이전에 선택했던 숫자와 같다면 건너뜀
    if not visited[i] and numbers[i] != last_used:
      visited[i] = True
      answer.append(numbers[i])
      last_used = numbers[i] 
      
      dfs() 
      
      # 백트래킹 (상태 복구)
      visited[i] = False
      answer.pop()

dfs()
