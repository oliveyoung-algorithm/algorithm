# https://www.acmicpc.net/problem/2667

import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

graph = []

for _ in range(N):
  graph.append(list(map(int, input().strip())))
  
visited = [[False] * N for _ in range(N)]

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

# 하나의 단지
def bfs(x, y):
  q = deque()
  q.append((x, y))
  visited[x][y] = True
  
  home = 1 # 단지 내 집 수
  
  while q:
    x, y = q.popleft()
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      
      if 0 <= nx < N and 0 <= ny < N: # 범위 내
        if not visited[nx][ny] and graph[nx][ny] == 1: # 방문 X, 그래프에 있다면
          visited[nx][ny] = True
          q.append((nx, ny))
          home += 1 # 단지 집 수 추가
  
  return home # 한 단지 집 개수
 
answer = []

for i in range(N):
  for j in range(N):
    if not visited[i][j] and graph[i][j] == 1:
      group = bfs(i, j)
      answer.append(group)

answer.sort() # 오름차순

print(len(answer))
for i in range(len(answer)):
  print(answer[i])