# https://www.acmicpc.net/problem/1764

import sys
input = sys.stdin.readline

N, M = map(int, input().split())

didnt_heard = set()
didnt_see = set()

for _ in range(N):
  didnt_heard.add(input().strip())

for _ in range(M):
  didnt_see.add(input().strip())
  
didnt_heard_see = sorted(list(didnt_heard & didnt_see))

print(len(didnt_heard_see))
for i in didnt_heard_see:
  print(i)
