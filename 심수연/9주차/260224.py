# https://www.acmicpc.net/problem/1753

import sys
import heapq
input = sys.stdin.readline

# 최단경로(음수X) -> 다익스트라 알고리즘 -> 우선순위 큐 사용

INF = int(1e9) 

V, E = map(int, input().split()) # V: 정점의 개수, E: 간선의 개수
start = int(input()) # 시작 노드 번호
graph = [[] for _ in range(V + 1)]

for _ in range(E):
  u, v, w = map(int, input().split())
  graph[u].append((v, w)) # u: 시작 노드, v: 도착 노드, w: 가중치(=거리)

distance = [INF] * (V + 1) # 각 정점까지 최단 거리 테이블 (무한으로 초기화)

def dijkstra(start):
  q = []
  heapq.heappush(q, (0, start)) # 최단 경로 0으로 설정해 q에 넣기 
  distance[start] = 0 # start까지 최단 거리도 0으로 초기화

  while q:
    dist, now = heapq.heappop(q) # 최단 거리가 짧은(우선순위 큐) 노드의 start로부터 거리와 노드 정보 꺼내기
    if distance[now] < dist: # distance[now] 가 더 짧으면 넘어가기
      continue
    # heapq에서 꺼냈던 dist가 더 짧다면,
    for v, w in graph[now]: # graph[now] 에서 갈 수 있는 노드 다 돌면서
      next_w = dist + w # 다음 가중치는 dist에 가중치 w 더한 것
      # 현재 노드 거쳐서 다른 노드로 이동하는 거리가 더 짧은 경우 -> 갱신해줘야 함
      if next_w < distance[v]: # 또 갱신해야하니 heapq에 넣어주기
        distance[v] = next_w # 최단 거리 갱신
        heapq.heappush(q, (next_w, v)) # q에도 넣어주기
    

dijkstra(start)

for i in range(1, V + 1):
  if distance[i] == INF:
    print("INF")
  else:
    print(distance[i])