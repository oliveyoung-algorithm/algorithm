import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')

N = int(input()) # 컴퓨터의 수
M = int(input()) # 네트워크의 수

graph = defaultdict(list)
for _ in range(M):
  start,end = map(int,input().split(" "))
  graph[start].append(end)
  graph[end].append(start)
  
# BFS : 방문한 노드의 개수를 반환
def BFS(graph,start, length):
  queue = deque()
  visited = [False] * (length + 1)
  
  queue.append(1)
  visited[1] = True
  count = 0
  
  while(len(queue) != 0):
    node = queue.popleft()
    if(node != 1):
      count += 1
    
    neighbors = graph[node]
    
    # 방문하지 않은 연결된 노드 추가
    for neighbor in neighbors:
      if(visited[neighbor] == False):
        queue.append(neighbor)
        visited[neighbor] = True

  return count

# 1로 시작해서 방문하는 노드 개수 반환
answer = BFS(graph,1, N)
print(answer)