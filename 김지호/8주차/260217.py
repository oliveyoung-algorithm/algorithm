# https://www.acmicpc.net/problem/7568
# 덩치, 실버5

import sys
sys.stdin = open('../../../input.txt', 'r')

T = int(input().strip())
people = []

for _ in range(T):
    weight, height = map(int, input().strip().split())
    people.append((weight, height))

for weight, height in people:
    rank = 1
    for cmp_weight, cmp_height in people:
        if weight < cmp_weight and height < cmp_height:
            rank += 1
    print(rank, end=' ')
