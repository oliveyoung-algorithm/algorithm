# https://www.acmicpc.net/problem/2644
# 촌수 계산, 실버2

import sys
from collections import deque, defaultdict

sys.stdin = open('../input.txt', 'r')

N = int(input()) # 사람의 수
start,end = map(int,input().split(" ")) # 촌수 계산해야 하는 사이
M = int(input()) # 관계의 수

def get_answer(start,end, N, M):
  graph = defaultdict(list)
  for _ in range(M):
    s,e = map(int,input().split(" "))
    graph[s].append(e)
    graph[e].append(s)
  
  visited = [False] * (N+1)
  queue = deque()
  
  queue.append((start,0))
  visited[start] = True
  
  while(len(queue) != 0):
    # print(f"queue: {queue}")
    node, length = queue.popleft()
    
    # 정답
    if(node == end):
      return length

    for next_node in graph[node]:
      # 정답
      if next_node == end:
        return length+1
      
      if not visited[next_node]:
        queue.append((next_node, length + 1))
        visited[next_node] = True
  
  return -1 # 촌수 관계 없는 경우

  

answer = get_answer(start,end, N, M)
print(answer)
