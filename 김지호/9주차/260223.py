# https://www.acmicpc.net/problem/14425
# 문자열 집합, 실버4

import sys

N, M = map(int, input().strip().split())

string_set = set()
for _ in range(N):
    string_set.add(input().strip())

count = 0
for _ in range(M):
    target = input().strip()
    if target in string_set:
        count += 1

print(count)
