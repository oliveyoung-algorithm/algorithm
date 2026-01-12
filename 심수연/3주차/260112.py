# https://www.acmicpc.net/problem/1927

import sys
import heapq

input = sys.stdin.readline

N = int(input())

# 가장 작은 값 출력하고 배열에서 제거 -> min heap 
hq = []

for _ in range(N):
  num = int(input())
  if num == 0:
    if not hq: # hq 가 없다면 0 출력
      min_num = 0
    else:
      min_num = heapq.heappop(hq) # 배열에서 가장 작은 값 출력
    print(min_num)
  else: # 정수 x 라면 배열에 추가
    heapq.heappush(hq, num)

