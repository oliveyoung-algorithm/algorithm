# https://www.acmicpc.net/problem/2805

import sys
input = sys.stdin.readline

N, M = map(int, input().split())

tree = list(map(int, input().split()))

start = 0
end = max(tree) - 1

answer = 0 # 절단기 높이의 최댓값

while start <= end:
  mid = (start + end) // 2 # mid는 절단기 높이
  
  goal = 0 # 집으로 가져갈 나무의 길이
  for i in tree:
    if i >= mid:
      goal += i - mid # 절단기로 자르고 남은만큼 추가
      if goal >= M: # 이미 충분하면 break
        break
    
  if goal >= M: # 나무의 총 길이가 목표치 M보다 길거나 같으면, 절단기 높이를 유지하거나 높여야 함.
    answer = mid # 절단기 높이로 설정
    start = mid + 1 # 더 높게 탐색
  else:
    end = mid - 1 # 더 짧게 탐색
    
print(answer) # 절단기 높이의 최대치