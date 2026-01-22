# https://www.acmicpc.net/problem/14425

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
S = list({input().strip() for _ in range(N)})
target = list(input().strip() for _ in range(M))

count = 0

for i in range(len(target)):
  if target[i] in S:
    count += 1
    
print(count)