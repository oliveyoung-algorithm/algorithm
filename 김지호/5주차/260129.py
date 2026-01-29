# https://www.acmicpc.net/problem/1138
# 한 줄로 서기, 실버2

import sys
sys.stdin = open("./input.txt",'r')

N = int(input())
left_count = list(map(int,input().split(" ")))

# 키가 큰 순서대로 탐색
result = []
for i in range(N,0,-1):
  count = left_count[i-1]
  result.insert(count,i)

print(" ".join(map(str,result)))
