# https://www.acmicpc.net/problem/10817

import sys
input = sys.stdin.readline

nums = list(map(int, input().split()))

nums.sort(reverse=True)

print(nums[1])