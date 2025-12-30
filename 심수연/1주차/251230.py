import sys
from collections import deque

input = sys.stdin.readline

n = int(input()) # 컴퓨터의 수
m = int(input()) # 간선의 수

# 초기화
graph = [[False] * (n + 1) for _ in range(n + 1)]
visited = [False] * (n + 1)

# 그래프 간선 정보 입력
for _ in range(m):
  a, b = map(int, input().split())
  graph[a][b] = True
  graph[b][a] = True

# 1번 컴퓨터부터 넣음
queue = deque([1])
visited[1] = True # 방문 처리

# bfs
while queue:
  current = queue.popleft() # 큐에서 제거
  for next in range(1, n + 1):
    if not visited[next] and graph[current][next]: # next 컴퓨터가 방문하지 않았고 현재 컴퓨터와 연결되어있다면
      visited[next] = True # 방문 처리
      queue.append(next) # 큐에 추가

print(sum(visited) - 1)
