# https://www.acmicpc.net/problem/2206

import sys
from collections import deque
input = sys.stdin.readline

N, M = map(int, input().split())

graph = [list(map(int, input().strip())) for _ in range(N)]

# visited: 이동 거리
# visited[x][y][0]: 벽 안 부순 상태, visited[x][y][1]: 벽 이미 부순 상태
visited = [[[0] * 2 for _ in range(M)] for _ in range(N)]
visited[0][0][0] = 1 # 이동거리 = 1

dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

def bfs(x, y, z):
  queue = deque()
  queue.append((x, y, z))
  
  while queue:
    a, b, c = queue.popleft() # a, b: 현재 위치, c: 벽 부쉈는지 여부
    # 끝 점에 도달하면 이동 횟수를 출력 (BFS라 최단거리 보장 -> 처음 도착한 게 정답.)
    if a == N - 1 and b == M - 1: # graph: 0 ~ N-1, 0 ~ M-1
      return visited[a][b][c]
    
    for i in range(4):
      nx = a + dx[i]
      ny = b + dy[i]
      if 0 <= nx < N and 0 <= ny < M:
        # 다음이 벽이고 아직 안 부쉈다면 -> 이번에 부술 수 있다!
        if graph[nx][ny] == 1 and c == 0:
          visited[nx][ny][1] = visited[a][b][0] + 1 # 한 칸 이동
          queue.append((nx, ny, 1)) # 벽을 부쉈으니 상태를 1로 넣는다.
      
        # 다음 이동할 곳이 벽이 아니고, 같은 상태(c)로는 한 번도 방문하지 않았다면
        elif graph[nx][ny] == 0 and visited[nx][ny][c] == 0:
          visited[nx][ny][c] = visited[a][b][c] + 1 # 한 칸 이동
          queue.append((nx, ny, c))
  
  return -1

print(bfs(0, 0, 0))