# https://www.acmicpc.net/problem/1504
# 특정한 최단 경로, 골드4

import sys
import copy
from collections import deque, defaultdict
from typing import List
sys.stdin = open('../../../input.txt', 'r')

N, E = map(int,input().split(" ")) # N(정점 개수), E(간선 개수)

# 다익스트라 문제
INF = float('inf')
graph = [[INF] * N for _ in range(N)]

for i in range(N):
  graph[i][i] = 0

for _ in range(E):
  start,end,dist = map(int,input().split(" "))
  graph[start-1][end-1] = dist
  graph[end-1][start-1] = dist

# 거쳐야 하는 점들
inputs = list(map(int,input().split(" ")) )
x1 = inputs[0]-1
x2 = inputs[1]-1

# startNode -> endNode
startNode = 1-1
endNode = N-1

# 방문할 수 잇는 노드 중에 제일 가까운 노드
def getMinNode(distance, visited, N):
  minNode = -1
  minDistance = INF
  for i in range(N):
    if not visited[i] and minDistance > distance[i]:
      minNode = i
      minDistance = distance[i]
  return minNode


def dijkstra(graph,N,start,end):
  visited = [False] * N
  distance = graph[start] # 최신 거리
  
  visited[start] = True
  
  for _ in range(N):
    node = getMinNode(distance, visited, N)
  
    visited[node] = True
      
    for index, dist in enumerate(graph[node]):
      if not visited[index] and distance[index] > distance[node] + dist:
        distance[index] = distance[node] + dist
  # print(f"{start} > {end} 최단거리 구하기")
  # print(distance)
  # print()
  return distance[end]

# 2가지 거리를 계싼
common = dijkstra(graph,N,x1,x2)
answer1 = dijkstra(graph,N,startNode,x1) + dijkstra(graph,N,x2,endNode)
answer2 = dijkstra(graph,N,startNode,x2) + dijkstra(graph,N,x1,endNode)

answer = min(answer1, answer2) + common
if answer == INF:
  print(-1)
else:
  print(answer)
# print(common + answer1)
# print(common + answer2)

