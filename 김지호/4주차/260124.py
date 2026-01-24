# https://www.acmicpc.net/problem/2565

from collections import defaultdict
import sys
from collections import deque

sys.stdin = open("./input.txt",'r')

N = int(input())

wires = []
for _ in range(N):
  wires.append(list(map(int,input().split(" "))))

wires.sort(key=lambda x:(x[0],x[1]))
b_positions = [w[1] for w in wires]
# b를 기준으로 가장 증가하는 부분 수열 구하기 (LTS)
dp = [1] * N

for i in range(N):
  for j in range(i):
    if(b_positions[j] < b_positions[i]):
      dp[i] = max(dp[i],1 + dp[j])
# print(wires)
# print(dp)
# 정답 : 최대 부분수열 길이 > 전체 길이 - 최대
print(N - max(dp))
