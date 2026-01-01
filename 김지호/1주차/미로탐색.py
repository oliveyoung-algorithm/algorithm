import sys
import copy
from collections import deque

N,M = map(int,input().split(" "))
board = []
for _ in range(N):
  arr = list(map(int,input()))
  board.append(arr)

def print2d_arr(arr):
  for a in arr:
    print(a)

# BFS (0,0) => (N-1,M-1) 이동
def BFS(board,N,M):
  drow = [0,1,0,-1]
  dcol = [1,0,-1,0]
  
  visited = [[False] * M for _ in range(N)]
  queue = deque()
  
  visited[0][0] = True
  queue.append([0,0,1]) # [row,col,count]

  # temp = 0  
  while(len(queue) != 0):
    node = queue.popleft()
    row,col,count = node
    # temp += 1
    # if(temp > 2):
    #   break
    
    if(row == N-1 and col == M-1):
      return count

    for i in range(4):
      nrow = row + drow[i]
      ncol = col + dcol[i]

      if(0 <= nrow <= N-1 and 0 <= ncol <= M-1 and visited[nrow][ncol] == False and board[nrow][ncol] == 1):
        queue.append([nrow,ncol,count+1])
        visited[nrow][ncol] = True
  
  return -1
    
  


answer = BFS(board,N,M)
print(answer)