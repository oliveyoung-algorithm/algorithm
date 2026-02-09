# https://www.acmicpc.net/problem/7568

import sys
input = sys.stdin.readline

N = int(input())

arr = []

for i in range(N):
  arr.append(list(map(int, input().split())))

# [[55, 185], [58, 183], [88, 186], [60, 175], [46, 155]]

rank = [1 for _ in range(N)]

# 자기(j)보다 덩치 큰 사람 있으면 등수를 + 1씩 하면 됨
for i in range(N):
  for j in range(N):
    if arr[i][0] > arr[j][0] and arr[i][1] > arr[j][1]:
      rank[j] += 1
      
print(*rank)