# https://www.acmicpc.net/problem/7576

import sys
input = sys.stdin.readline
from collections import deque

def bfs():
  M, N = map(int, input().split()) # N이 행, M이 열
  graph = [list(map(int, input().split())) for _ in range(N)]

  dx = [-1, 1, 0, 0]
  dy = [0, 0, -1, 1]

	# multi source bfs
  q = deque()
  for i in range(N):
    for j in range(M):
      if graph[i][j] == 1: # 토마토가 익은 게 있으면 무조건 q에 넣기
        q.append((i, j))

  while q:
    x, y = q.popleft()
    
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < N and 0 <= ny < M and graph[nx][ny] == 0: # 안 익었으면
        graph[nx][ny] = graph[x][y] + 1 # graph[x][y]보다 하루씩 더 걸림
        q.append((nx, ny)) # q에 또 넣어주기

  # 출력
  max_value = 0
  for i in range(N):
    for j in range(M):
      if graph[i][j] == 0: # 안 익은 게 있으면 -1 로 print
        print(-1)
        return
      max_value = max(max_value, graph[i][j])

  print(max_value - 1) # 처음에 익은 토마토가 1로 들어오기 때문에 1일치 빼서 -1 해줘야 함
  # 처음부터 다 익어있는 경우: -1 또는 1뿐!!! max_value = 1일 거고, 1 - 1 = 0 이므로 print(0) 됨.

bfs()