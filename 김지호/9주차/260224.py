# https://www.acmicpc.net/problem/10773
# 제로, 실버4

import sys
sys.stdin = open('../../../input.txt', 'r')

K = int(input().strip())

stack = []
for _ in range(K):
    num = int(input().strip())
    
    if num == 0:
        stack.pop()
    else:
        stack.append(num)

print(sum(stack))
