import sys
input = sys.stdin.readline
from collections import deque

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]
zeros = []
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]
answer = 0

def OOB(x, y):
    return x < 0 or x >= N or y < 0 or y >= M

# 바이러스 퍼트리기
def bfs(temp):
    q = deque()

    for i in range(N):
        for j in range(M):
            if temp[i][j] == 2:
                q.append((i, j))
    
    while q:
        x, y = q.popleft()

        for dir in range(4):
            nx = x + dx[dir]
            ny = y + dy[dir]

            if OOB(nx, ny):
                continue
            if temp[nx][ny] == 0:
                q.append((nx, ny))
                temp[nx][ny] = 2

# 0인 곳들 중 3개 백트래킹 후, BFS
wall_idx = []
def dfs(depth, start):
    global answer

    if depth == 3:
        # 깊은 복사
        temp = [row[:] for row in arr]
        # 벽 세우기
        for idx in wall_idx:
            x, y = zeros[idx]
            temp[x][y] = 1
        # 바이러스 퍼트리기
        bfs(temp)
        # temp 중 남은 안전지역
        cnt = 0
        for i in range(N):
            for j in range(M):
                if temp[i][j] == 0:
                    cnt += 1

        answer = max(answer, cnt)
        return

    for i in range(start, len(zeros)):
        wall_idx.append(i)
        dfs(depth + 1, i + 1)
        wall_idx.pop()

# 0인 곳 위치 파악
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0:
            zeros.append((i, j))

dfs(0, 0)
print(answer)
