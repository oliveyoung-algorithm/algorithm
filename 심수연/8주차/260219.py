# https://www.acmicpc.net/problem/2231

import sys
input = sys.stdin.readline

N = int(input())

for i in range(1, N+1):
  temp = i + sum(map(int, str(i)))
  if temp == N: # i가 작은순부터 브루트포스
    print(i)
    break
  if i == N: # i가 끝까지 갔다는 건 계속해서 생성자가 없었다는 뜻 => 0
    print(0)