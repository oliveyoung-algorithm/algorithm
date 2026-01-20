# https://www.acmicpc.net/problem/1655

import sys
import heapq

input = sys.stdin.readline

left = [] # max heap
right = [] # min heap

N = int(input())

for _ in range(N):
  x = int(input())
  
  # left에 우선 넣기
  heapq.heappush(left, -x) # max heap에는 - 로 넣기
  
  # left의 최대 <= right의 최소가 되도록 만들기
  if right and (-left[0] > right[0]): # left의 최대가 right의 최소보다 크다면
    # swap
    a = -heapq.heappop(left) # left의 최대
    b = heapq.heappop(right) # right의 최소
    heapq.heappush(left, -b) 
    heapq.heappush(right, a)
    
  # left가 right보다 같거나 1개 많도록 만들기
  if len(left) > len(right) + 1: # left가 right 개수 + 1 보다 더 많다면
    # left에서 right로 넘기기
    a = -heapq.heappop(left)
    heapq.heappush(right, a)
  elif len(left) < len(right): # right가 left 개수보다 더 많다면
    # right에서 left로 넘기기
    b = heapq.heappop(right)
    heapq.heappush(left, -b)

  print(-left[0])
