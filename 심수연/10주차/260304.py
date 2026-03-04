# https://www.acmicpc.net/problem/2566

import sys
input = sys.stdin.readline

graph = [list(map(int, input().split())) for _ in range(9)]

max_value = 0
row = 0
col = 0

for i in range(9):
  for j in range(9):
    if graph[i][j] >= max_value:
      max_value = graph[i][j]
      col = j + 1
      row = i + 1

print(max_value)
print(row, col)
  