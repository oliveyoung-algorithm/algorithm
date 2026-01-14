# https://www.acmicpc.net/problem/2217

import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("../input.txt",'r')

N = int(input())
numbers = []
for _ in range(N):
  numbers.append(int(input()))

numbers.sort(reverse=True)

max_weight = 0
for i in range(N):
  max_weight = max(max_weight, numbers[i] * (i + 1))

print(max_weight)