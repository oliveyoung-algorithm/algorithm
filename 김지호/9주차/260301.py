# https://www.acmicpc.net/problem/1197
# 최소 스패닝 트리, 골드4

import sys
import copy

V,E = map(int,input().split(" ")) # V(노드 개수), E(간선 개수)

graph = []
for _ in range(E):
  a,b,w = map(int,input().split(" "))
  graph.append([a,b,w]) # a -> b : 가중치 w


def find_parent(parents,x):
  while parents[x] != x:
    parents[x] = parents[parents[x]]
    x = parents[x]
  return x


def union_find(parents,a,b):
  rootA = find_parent(parents,a)
  rootB = find_parent(parents,b)
  
  if(rootA != rootB):
    parents[rootB] = rootA
  
  
  
# graph의 구조를 가진 그래프에서, 최소 스패닝 트리의 가중치를 구하는 함수
def kruskal(V,graph):
  graph.sort(key=lambda x:x[2]) # 오른차순
  # print(f"정렬된 GRAPH : {graph}")
  
  parents = [i for i in range(V+1)]
  
  # print(parents)
  count = 0
  min_path = 0
  
  for a,b,w in graph:
    # print(f"\n검사 : {a} -> {b}")
    if find_parent(parents,a) != find_parent(parents,b):
      # print(f"✅선택함")
      union_find(parents,a,b)
      count += 1
      min_path += w
    

      # 종료 조건
      if(count == V-1):
        break
    # else:
    #   print(f"루프가 만들어져서 선택 X")
  
  return min_path

answer = kruskal(V,graph)
print(answer)
