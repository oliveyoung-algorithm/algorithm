# https://www.acmicpc.net/problem/1302

import sys
input = sys.stdin.readline

N = int(input())

dict = {}

for i in range(N):
  book = input()
  if book in dict:
    dict[book] += 1
  else:
    dict[book] = 1

print(min(dict, key=lambda x: (-dict[x], x)))