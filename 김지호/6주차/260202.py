# https://www.acmicpc.net/problem/2212
# 센서, 골드5

from collections import deque

import sys
sys.stdin = open("../../../input.txt",'r')


N = int(input()) # 센서 개수
K = int(input()) # 집중국 개수

coordinates = list(map(int,input().split(" "))) # 센서 위치
coordinates.sort()

gaps = []
for i in range(1,len(coordinates)):
  gaps.append(coordinates[i] - coordinates[i-1])

gaps.sort() # 오름차순
answer = sum(gaps[0:N-K])
print(answer)
