import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')
N = int(input())
board = []
for _ in range(N):
  arr = list(map(int,input()))
  board.append(arr)


# BFS
drow = [0,1,0,-1]
dcol = [1,0,-1,0]

def BFS(board,row,col,visited, N):
  countLength = 0
  queue = deque()
  queue.append([row,col])
  visited[row][col] = True
  
  while(len(queue) != 0):
    node = queue.popleft()
    cRow, cCol = node
    countLength += 1
    
    for i in range(4):
      nRow = cRow + drow[i]
      nCol = cCol + dcol[i]
      if(0 <= nRow < N and 0 <= nCol < N and visited[nRow][nCol] == False and board[nRow][nCol] == 1):
        queue.append([nRow,nCol])
        visited[nRow][nCol] = True
  return countLength    
    
connectedLengths = []
countApartments = 0


visited = [[False] * N for _ in range(N)]
for row in range(N):
  for col in range(N):
    if(visited[row][col] == False and board[row][col] == 1):
      connectedLength = BFS(board,row,col,visited,N) # board[row][col]부터 시작하여 연결된 노드 마킹
      connectedLengths.append(connectedLength)
      countApartments += 1


# 단지내 집의 수 오름차순 정렬
connectedLengths.sort()

print(countApartments)
for answer in connectedLengths:
  print(answer)



