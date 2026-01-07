# https://www.acmicpc.net/problem/1920

import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split()))
arr.sort()

M = int(input())
nums = list(map(int, input().split()))

def binary_search(array, value):
  left = 0
  right = len(array) - 1
  
  while left <= right:
    mid = (left + right) // 2
    if value == array[mid]:
      return 1
    elif value < array[mid]:
      right = mid - 1
    else:
      left = mid + 1
  return 0

for i in range(M):
  print(binary_search(arr, nums[i]))
    
    
  