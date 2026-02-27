# https://www.acmicpc.net/problem/1085

import sys
input = sys.stdin.readline

x, y, w, h = map(int, input().split())

print(min(y, h-y, x, w-x))
