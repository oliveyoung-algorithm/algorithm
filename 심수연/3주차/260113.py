# https://www.acmicpc.net/problem/11286

import sys
import heapq
input = sys.stdin.readline

N = int(input())

hq = []

for _ in range(N):
  num = int(input())
  if num == 0:
    if not hq:
      min_num = 0
    else:
      min_num = heapq.heappop(hq)[1] # 최소 힙 -> 튜플을 pop. 실제 값 (idx = 1) 을 min_num에 대입
    print(min_num) 
  else:
    heapq.heappush(hq, (abs(num), num)) # 절댓값 최소 힙. 기존 값을 같이 튜플로 넣어줌  