# https://www.acmicpc.net/problem/1647
# 도시 분할 계획, 골드4

import sys
import copy
from collections import deque, defaultdict
from typing import List
sys.stdin = open('../../../input.txt', 'r')

N, M = map(int,input().split(" ")) # N(집의 개수) M(길의 개수)

edges = []
for _ in range(M):
  A,B,C = map(int,input().split(" ")) # A to B : C
  edges.append([A,B,C])

# MST 알고리즘
def get_parent(parents,n):
  while parents[n] != n:
    parents[n] = parents[parents[n]]
    n = parents[n]
  return n

def union_find(parents,a,b):
  rootA = get_parent(parents,a)
  rootB = get_parent(parents,b)
  
  if rootA != rootB:
    parents[rootB] = rootA

mst_edges = []
def Kruskal(N,edges):
  global mst_edges
  
  parents = [i for i in range(N+1)]  # 0번쨰 인덱스는 사용 안함
  # print(parents)
  
  edges.sort(key=lambda x:x[2]) # 거리 오름차순
  
  total_cost = 0
  count = 0
  
  for a,b,c in edges:
    if get_parent(parents,a) != get_parent(parents,b):
      mst_edges.append(c)
      union_find(parents,a,b)
      total_cost += c
      count += 1
      
      if(count == N-1):
        break
  
  return 0

Kruskal(N,edges)
# print(mst_edges)
answer = sum(mst_edges) - mst_edges[len(mst_edges)-1]
print(answer)


  
  
