# https://www.acmicpc.net/problem/10816

import sys
from collections import defaultdict
input = sys.stdin.readline

N = int(input())
cards = list(map(int, input().split()))
M = int(input())
nums = list(map(int, input().split()))

cnt = defaultdict(int)

arr = []

for card in cards:
  cnt[card] += 1
  
for num in nums:
  arr.append(cnt[num])
  
print(*arr)