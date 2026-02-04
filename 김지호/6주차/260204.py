# https://www.acmicpc.net/problem/17144
# 미세먼지 안녕!, 골드4

import sys
sys.stdin = open("../../../input.txt",'r')

R, C, T = map(int, input().split())

board = []
cleaners = []

for row in range(R):
    line = list(map(int, input().split()))
    board.append(line)
    
    for col in range(C):
        if line[col] == -1:
            cleaners.append((row, col))

# 확산 방향
drow = [0, 1, 0, -1]
dcol = [1, 0, -1, 0]

for _ in range(T):
    # 1. 미세먼지 확산
    new_board = [[0] * C for _ in range(R)]
    
    for row in range(R):
        for col in range(C):
            if board[row][col] == -1:
                new_board[row][col] = -1
            elif board[row][col] > 0:
                spread = board[row][col] // 5
                count = 0
                
                for i in range(4):
                    nrow = row + drow[i]
                    ncol = col + dcol[i]
                    
                    if 0 <= nrow < R and 0 <= ncol < C and board[nrow][ncol] != -1:
                        new_board[nrow][ncol] += spread
                        count += 1
                
                new_board[row][col] += board[row][col] - (spread * count)
    
    board = new_board
    
    # 2. 공기청정기 작동
    # 위쪽 (반시계)
    top = cleaners[0][0]
    # 아래로
    for row in range(top - 1, 0, -1):
        board[row][0] = board[row - 1][0]
    # 왼쪽으로
    for col in range(C - 1):
        board[0][col] = board[0][col + 1]
    # 위로
    for row in range(top):
        board[row][C - 1] = board[row + 1][C - 1]
    # 오른쪽으로
    for col in range(C - 1, 1, -1):
        board[top][col] = board[top][col - 1]
    board[top][1] = 0
    
    # 아래쪽 (시계)
    bottom = cleaners[1][0]
    # 위로
    for row in range(bottom + 1, R - 1):
        board[row][0] = board[row + 1][0]
    # 왼쪽으로
    for col in range(C - 1):
        board[R - 1][col] = board[R - 1][col + 1]
    # 아래로
    for row in range(R - 1, bottom, -1):
        board[row][C - 1] = board[row - 1][C - 1]
    # 오른쪽으로
    for col in range(C - 1, 1, -1):
        board[bottom][col] = board[bottom][col - 1]
    board[bottom][1] = 0

answer = sum(board[row][col] for row in range(R) for col in range(C) if board[row][col] > 0)
print(answer)
