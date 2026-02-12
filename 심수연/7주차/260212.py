# https://www.acmicpc.net/problem/2750
import sys
input = sys.stdin.readline

N = int(input())
arr = sorted(int(input()) for _ in range(N))

for i in range(N):
  print(arr[i])