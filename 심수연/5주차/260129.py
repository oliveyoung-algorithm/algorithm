# https://www.acmicpc.net/problem/1822

import sys
input = sys.stdin.readline

numA, numB = map(int, input().split())
A = set(input().split())
B = set(input().split())

a_minus_b = A - B

print(len(a_minus_b))

sorted_a_minus_b = sorted(map(int, a_minus_b))
print(*sorted_a_minus_b)