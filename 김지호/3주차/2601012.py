# https://www.acmicpc.net/problem/16173

import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')

N = int(input())
board = []

for _ in range(N):
  board.append(list(map(int,input().split(" "))))

# 오른쪽 아래

visited = [[False] * N for _ in range(N)]
queue = deque()

queue.append([0,0])
visited[0][0] = True

answer = 'Hing'

drow = [0,1]
dcol = [1,0]

while(len(queue) != 0):
  node = queue.popleft()
  row,col = node
  # 종료조건
  if(row == N-1 and col == N-1):
    answer = "HaruHaru"
    break
  
  for i in range(2):
    nrow = row + drow[i] * board[row][col]
    ncol = col + dcol[i] * board[row][col]
    if(0 <= nrow < N and 0 <= ncol < N and visited[nrow][ncol] == False):
      queue.append([nrow,ncol])
      visited[nrow][ncol] = True
  
print(answer)