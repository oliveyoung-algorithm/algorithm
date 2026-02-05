# https://www.acmicpc.net/problem/14467

import sys
from collections import defaultdict
input = sys.stdin.readline

N = int(input())

count = 0

dict = {}

for i in range(N):
  cow, location = map(int, input().split())

  if cow not in dict: # cow가 없을 땐
    dict[cow] = location # 초기화
  elif location != dict[cow]: # cow가 이미 있는데 location 이 다를 땐 
    count += 1 # count up
    dict[cow] = location # 업데이트

print(count)