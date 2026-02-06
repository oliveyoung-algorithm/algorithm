# https://www.acmicpc.net/problem/21918

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
bulb = list(map(int, input().split()))

for i in range(M):
  a, b, c = map(int, input().split())
  if a == 1:
    bulb[b - 1] = c
  elif a == 2:
    for j in range(b - 1, c):
      bulb[j] = int(not bulb[j])
  elif a == 3:
    for j in range(b - 1, c):
      bulb[j] = 0
  else:
    for j in range(b - 1, c):
      bulb[j] = 1

print(*bulb)