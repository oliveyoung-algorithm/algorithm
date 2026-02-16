# https://www.acmicpc.net/problem/1743
# 음식물 피하기, 실버1

import sys
from collections import deque
sys.stdin = open('../../../input.txt', 'r')

N, M, K = map(int, input().strip().split())
board = [[0] * M for _ in range(N)]

for _ in range(K):
    row, col = map(int, input().strip().split())
    board[row - 1][col - 1] = 1

directions = [(0, 1), (0, -1), (1, 0), (-1, 0)]


def BFS(start_row, start_col):
    q = deque([(start_row, start_col)])
    board[start_row][start_col] = 0
    cnt = 1  # 시작점도 카운트
    
    while q:
        cur_row, cur_col = q.popleft()
        
        for dy, dx in directions:
            next_row, next_col = cur_row + dy, cur_col + dx
            
            if 0 <= next_row < N and 0 <= next_col < M and board[next_row][next_col] == 1:
                board[next_row][next_col] = 0
                q.append((next_row, next_col))
                cnt += 1
    
    return cnt


answer = 1
for row in range(N):
    for col in range(M):
        if board[row][col] == 1:
            answer = max(answer, BFS(row, col))

print(answer)
