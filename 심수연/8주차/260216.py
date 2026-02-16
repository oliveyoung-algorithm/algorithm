# https://www.acmicpc.net/problem/15651

import sys
from itertools import product
input = sys.stdin.readline

N, M = map(int, input().split())

nums = [i for i in range(1, N+1)]

perm = list(product(nums, repeat=M))
# [(1, 1), (1, 2), (1, 3), (1, 4), (2, 1), (2, 2), (2, 3), (2, 4), (3, 1), (3, 2), (3, 3), (3, 4), (4, 1), (4, 2), (4, 3), (4, 4)]

for num in perm:
  for i in num:
    print(i, end=' ')
  print(end = '\n')