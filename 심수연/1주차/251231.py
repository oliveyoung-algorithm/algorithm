import sys
from collections import deque

input = sys.stdin.readline

n = int(input())
graph = []

for i in range(n):
  row = list(input().strip())
  graph.append(row)

visited = [[False] * n for _ in range(n)]

answer = [0, 0]

def bfs(x, y):
  queue = deque()
  queue.append((x, y))
  visited[x][y] = 1 # 방문 처리
  
  while queue:
    x, y = queue.popleft()
    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if 0 <= nx < n and 0 <= ny < n and not visited[nx][ny] and graph[x][y] == graph[nx][ny]:
        visited[nx][ny] = 1 # 방문 처리
        queue.append((nx, ny)) # 큐에 추가
  
# 정상인이 보는 그룹 개수
for i in range(n):
  for j in range(n):
    if not visited[i][j]:
      bfs(i, j)
      answer[0] += 1
      
# 색약인 graph 초기화
for i in range(n):
  for j in range(n):
    if graph[i][j] == 'R':
      graph[i][j] = 'G' # 빨강, 초록 구분 X
  
# 색약인이 보는 그룹 개수
visited = [[False] * n for _ in range(n)]
for i in range(n):
  for j in range(n):
    if not visited[i][j]:
      bfs(i, j)
      answer[1] += 1
      
print(*answer)
    
