# https://www.acmicpc.net/problem/1238
# 파티, 골드3

import sys
import copy
from collections import deque, defaultdict
from typing import List
sys.stdin = open('../../../input.txt', 'r')

inputs = list(map(int,input().split(" ")))

# N(마을 개수), M(단방향 도로 개수), X(목적지 마을 번호)
N = int(inputs[0])
M = int(inputs[1])
X = int(inputs[2]) - 1
INF = float('inf')

graph = [[INF] * N for _ in range(N)]
reversed_graph = [[INF] * N for _ in range(N)]
for _ in range(M):
  inputs = list(map(int,input().split(" ")))
  start  = int(inputs[0])-1
  end  = int(inputs[1])-1
  dist  = int(inputs[2])
  graph[start][end] = dist # start -> end 거리 dist
  reversed_graph[end][start] = dist # start -> end 거리 dist

for i in range(N):
  graph[i][i] = 0
  reversed_graph[i][i] = 0

def print_2d_arr(array):
  for arr in array:
    print(arr)

def getMinNode(distance,visited,N):
  minNode = -1
  minDist = INF
  for node in range(N):
    if(not visited[node] and distance[node] < minDist):
      minNode = node
      minDist = distance[node]
  return minNode

# start에서 출발하는 최단거리 
def dijkstra(graph,start,N):
  visited = [False] * N
  distance = graph[start]
  
  visited[start] = True
  
  for _ in range(N):
    node = getMinNode(distance,visited,N)
    
    visited[node] = True
    for i in range(N):
      if not visited[i] and distance[i] > graph[node][i] + distance[node]:
        distance[i] = graph[node][i] + distance[node]
  
  return distance

go_distance = dijkstra(reversed_graph,X,N)
come_distance = dijkstra(graph,X,N)

answer = -INF # 최장거리 구하기
for i in range(N):
  answer = max(answer,go_distance[i] + come_distance[i])
print(answer)
