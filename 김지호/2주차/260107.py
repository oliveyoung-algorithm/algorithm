# https://www.acmicpc.net/problem/11404
import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')

Infinity = float('inf')

N = int(input()) # 도시의 개수
M = int(input()) # 버스의 개수


def 플로이드워셜(N,M):
    graph = [[Infinity] * (N + 1) for _ in range(N + 1)]

    # 초기화: 자기 자신 0
    for row in range(0, N + 1):
      for col in range(0, N + 1):
        if row == col:
          graph[row][col] = 0

    
    for _ in range(M):
      start, end, value = map(int, input().split(" "))
      if value < graph[start][end]:
        # 하나의 길에 여러 경로가 있다면 최소 선택
        graph[start][end] = value
    

    # 순회
    for 경유 in range(1, N + 1):
      for 시작 in range(1, N + 1):
        for 끝 in range(1, N + 1):
          graph[시작][끝] = min(graph[시작][끝], graph[시작][경유] + graph[경유][끝])

    # 수행된 결과 출력
    return graph

answer = 플로이드워셜(N,M)

for row in range(1, N + 1):
  for col in range(1, N + 1):
    if answer[row][col] == Infinity:
        print(0, end=" ")
    else:
        print(answer[row][col], end=" ")
  print() # 줄바꿈