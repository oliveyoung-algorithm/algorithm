# https://www.acmicpc.net/problem/1012

import sys
from collections import deque
input = sys.stdin.readline

queue = deque()

dx = [1, -1, 0, 0]
dy = [0, 0, 1, -1]

# bfs(x, y)
def bfs(x, y):
  queue.append((x, y))  # 큐에 넣기
  graph[y][x] = 0 # 방문 처리
  
  while(queue): # while 로 반복
    x, y = queue.popleft() # x, y 뽑아내서
    # 4방향 돌리기
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]
      if 0 <= nx < M and 0 <= ny < N and graph[ny][nx] == 1: # 범위 + 그래프에 있는지
        graph[ny][nx] = 0 # 방문처리
        queue.append((nx, ny)) # 큐에 넣기
        
T = int(input())

for _ in range(T):
  M, N, K = map(int, input().split())
  
  # 그래프 초기화
  graph = [[0] * M for _ in range(N)]

  # 그래프 그리기
  for i in range(K):
    x, y = map(int, input().split())
    graph[y][x] = 1

  answer = 0

  for i in range(N):
    for j in range(M):
      if graph[i][j] == 1:
        bfs(j, i)
        answer += 1
        
  print(answer)