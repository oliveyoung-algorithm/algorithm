# https://leetcode.com/problems/number-of-islands

from typing import List
from collections import deque

class Solution:
  def numIslands(self, grid: List[List[str]]) -> int:
    N = len(grid)
    M = len(grid[0])
    
 
    visited = [[False] * M for _ in range(N)]
    
    count = 0
    for row in range(N):
      for col in range(M):
        if(visited[row][col] == False and grid[row][col] == '1') :
          count += 1
          self.BFS(grid,row,col,visited,N,M)
    return count
  
  def BFS(self,grid,row,col,visited,N,M):
    drow = [1,0,-1,0]
    dcol = [0,-1,0,1]
    
    queue = deque()
    queue.append([row,col])
    visited[row][col] = True
    
    while(len(queue) != 0):
      row, col = queue.popleft()
      for i in range(4):
        nrow = row + drow[i]
        ncol = col + dcol[i]
        if(0 <= nrow < N and 0 <= ncol < M and visited[nrow][ncol] == False and grid[nrow][ncol]=='1'):
          queue.append([nrow,ncol])
          visited[nrow][ncol] = True

      
        
answer = Solution()
print(answer.numIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","1","1"]
]))
