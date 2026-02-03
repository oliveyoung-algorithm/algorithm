# https://www.acmicpc.net/problem/1158

import sys
from collections import deque
input = sys.stdin.readline

N, K = map(int, input().split())
# K = 3일 때 1, 2를 뒤로 보내고, 3을 빼내기
queue = deque([i for i in range(1, N+1)])

result = []
# print(queue) # deque([1, 2, 3, 4, 5, 6, 7])

while queue:
  for _ in range(K - 1): # K = 3일 때: 1, 2번까지
    queue.append(queue.popleft()) # 뒤로 보내기
  result.append(queue.popleft())

# print(result) # [3, 6, 2, 7, 5, 1, 4]
print('<' + ', '.join(map(str, result)) + '>') # <3, 6, 2, 7, 5, 1, 4>
