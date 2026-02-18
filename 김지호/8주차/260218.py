# https://www.acmicpc.net/problem/9095
# 1, 2, 3 더하기, 실버3

import sys
sys.stdin = open('../../../input.txt', 'r')

def solve(n):
    if n == 1:
        return 1
    elif n == 2:
        return 2
    elif n == 3:
        return 4
    else:
        return solve(n - 1) + solve(n - 2) + solve(n - 3)

T = int(input().strip())
for _ in range(T):
    N = int(input().strip())
    print(solve(N))
