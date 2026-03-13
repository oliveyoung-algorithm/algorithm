# https://www.acmicpc.net/problem/11651

import sys
input = sys.stdin.readline

N = int(input())

dots = [list(map(int, input().split())) for _ in range(N)]

dots.sort(key=lambda x: (x[1], x[0]))

for x, y in dots:
  print(x, y)