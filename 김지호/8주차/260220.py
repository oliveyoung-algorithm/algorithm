# https://www.acmicpc.net/problem/1920
# 수 찾기, 실버4

import sys
sys.stdin = open('../../../input.txt', 'r')

N = int(input().strip())
numbers = list(map(int, input().strip().split()))
M = int(input().strip())
targets = list(map(int, input().strip().split()))

numbers.sort()

for target in targets:
    left, right = 0, N - 1
    found = False
    
    while left <= right:
        mid = (left + right) // 2
        
        if target == numbers[mid]:
            found = True
            print(1)
            break
        elif target > numbers[mid]:
            left = mid + 1
        else:
            right = mid - 1
    
    if not found:
        print(0)
