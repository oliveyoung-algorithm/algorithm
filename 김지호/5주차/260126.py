# https://www.acmicpc.net/problem/2166

import sys

sys.stdin = open("./input.txt",'r')

N = int(input())
coordinates = []

for _ in range(N):
  coordinates.append(list(map(int,input().split(' '))))
coordinates.append(coordinates[0])

answer = 0
for i in range(N):
  answer += (coordinates[i][0] * coordinates[i+1][1]) - (coordinates[i+1][0]*coordinates[i][1])

print(abs(answer)/2)
