# https://www.acmicpc.net/problem/11650

import sys
input = sys.stdin.readline

N = int(input())
graph = [[] for _ in range(N)]

for i in range(N):
  graph[i] = list(map(int, input().split()))

graph = sorted(graph, key=lambda x: (x[0], x[1]))

for i in range(len(graph)):
  print(*graph[i])