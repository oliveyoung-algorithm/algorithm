# https://www.acmicpc.net/problem/1715

import sys
import heapq
input = sys.stdin.readline

N = int(input())

# 우선순위 큐 (두 묶음의 합이 최소가 될 수 있도록 -> min heap)
hq = []

for i in range(N):
  heapq.heappush(hq, int(input()))

answer = 0 

if N == 1:
  print(answer)

else:
  while len(hq) > 1:
    A = heapq.heappop(hq) # 가장 작은 수 2개 뽑아 더하기
    B = heapq.heappop(hq)
    answer += A + B
    heapq.heappush(hq, A + B) # A+B값 hq에 다시 넣기

  print(answer)