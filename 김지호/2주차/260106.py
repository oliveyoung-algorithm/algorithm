# https://www.acmicpc.net/problem/7562
import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')

Testcase = int(input())

answers = []

def solution():
  N = int(input())
  sRow, sCol = map(int,input().split(" "))
  eRow, eCol = map(int,input().split(" "))
  
  drow = [-2,-1,1,2,2,1,-1,-2]
  dcol = [1,2,2,1,-1,-2,-2,-1]
  
  queue= deque()
  visited = [[False] * N for _ in range(N)]
  
  queue.append([sRow,sCol,0]) # [row, col, 이동칸 수]
  visited[sRow][sCol] = True
  
  while(len(queue) != 0):
    node = queue.popleft()  
    cRow, cCol, move = node
    
    # 종료 조건
    if(cRow == eRow and cCol == eCol):
      return move
    
    for i in range(8):
      nRow = cRow + drow[i]
      nCol = cCol + dcol[i]
      
      if(0 <= nRow < N and 0 <= nCol < N and visited[nRow][nCol] == False):
        queue.append([nRow,nCol, move + 1])
        visited[nRow][nCol] = True
        
  
  
for _ in range(Testcase):
  print(solution())


  