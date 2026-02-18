# https://www.acmicpc.net/problem/1202

import sys
input = sys.stdin.readline
import heapq

N, K = map(int, input().split())
gemstone = []

for i in range(N):
  heapq.heappush(gemstone, list(map(int, input().split()))) # min heap - 가장 가벼운 보석이 gemstone[0]

bags = []
for i in range(K):
  bags.append(int(input()))
bags.sort() # 가방은 작은 것 부터 정렬

# 가방 작은 것부터, 가방에 들어가면서 가장 비싼 보석을 넣는 게 핵심

temp = []
answer = 0
for bag in bags:
  while gemstone and gemstone[0][0] <= bag: # 가장 가벼운 보석(gemstone[0])이 가방에 들어가면, (보석 동날 때까지 쫙 돌리기)
    heapq.heappush(temp, -heapq.heappop(gemstone)[1]) # 뽑아내서 temp에다가 넣기 (가장 비싼 보석 순으로 - max heap)
  
  if temp: # temp가 있으면
    answer -= heapq.heappop(temp) # 비싼 보석 (max heap 으로 넣었으니까 다시 음수로 빼내서 원복) , bag마다 더해줘야하므로 -=
  elif not gemstone:
    break

print(answer)
