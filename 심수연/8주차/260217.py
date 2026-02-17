# https://www.acmicpc.net/problem/2075

import sys
import heapq

input = sys.stdin.readline

N = int(input())

hq = []

for _ in range(N):
  for num in map(int, input().split()):
    if len(hq) < N:
      heapq.heappush(hq, num) 
      # n번째 수보다 크면 넣기
    else: # len(hq) = N 유지
      if hq[0] < num: # hq의 최솟값이 num보다 작으면
        heapq.heappushpop(hq, num) # num을 hq에 넣고 hq의 최솟값 빼내기

# hq 길이를 N(ex. 5)로 고정해두고, 계속 가장 큰 N개만큼의 값들만 들어가도록 유지시킨 다음, 가장 작은 값(= N번째로 큰 수 = 최소힙) 을 뽑아내는 거임!!
# ex) [35, 41, 48, 49, 52] -> 35
print(hq[0]) # 최소힙