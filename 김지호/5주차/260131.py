# https://www.acmicpc.net/problem/20055
# 컨베이어 벨트 위의 로봇 , 골드5

import sys
import copy
from collections import deque, defaultdict
from typing import List
sys.stdin = open('../../../input.txt', 'r')

N, K = map(int,input().split(" "))
belts = deque(map(int,input().split(" "))) # 내구도
TOTAL_LENGTH = 2 * N

robots = deque([False] * N) # 로봇의 존재 유무

answer = None
step = 1
count_zero = 0

while(True):
  #1. 회전 (내구도 감소X)
  # 벨트 회전
  belts.rotate(1)
  robots.rotate(1)

  # "내리는 위치"이면 그 즉시 벨트에서 내린다. 
  robots[N-1] = False

  
  #2. 로봇 이동
  for i in range(N-2,-1,-1):
    if robots[i]:
      if not robots[i+1] and belts[i+1] >=1:
        robots[i] = False
        robots[i+1] = True
        belts[i+1] -= 1
        
        if belts[i+1] == 0:
          count_zero += 1
  
  # "내리는 위치"이면 그 즉시 벨트에서 내린다. 
  robots[N-1] = False
  
  #3. 새로운 로봇 투입
  if(belts[0] != 0):
    robots[0] = True
    belts[0] -= 1 # 투입 위치 내구도 감소
    if(belts[0] == 0):
      count_zero += 1
  
  if count_zero >= K:
    answer = step
    break
  
  step += 1
 
print(answer)
  
