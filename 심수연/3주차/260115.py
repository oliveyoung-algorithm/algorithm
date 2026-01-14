# https://www.acmicpc.net/problem/1654

import sys
input = sys.stdin.readline

K, N = map(int, input().split())

lan_cable = []

for _ in range(K):
  lan_cable.append(int(input()))
  
start = 1
end = max(lan_cable)

answer = 0

while start <= end:
  mid = (start + end) // 2 # 자를 랜선의 길이
  
  count = 0 # 랜선 개수
  
  for i in lan_cable:
    count += i // mid
    if count >= N:
      break
  
  if count >= N: # count 가 N보다 크거나 같으면
    answer = mid # 자를 랜선의 길이를 answer 에 담기
    start = mid + 1 # 자를 랜선의 길이를 더 키우기
  else:
    end = mid - 1 # 자를 랜선의 길이를 더 줄이기

print(answer)
    
    
  