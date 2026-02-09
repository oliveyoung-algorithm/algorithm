# https://www.acmicpc.net/problem/2467
# 용액, 골드5

import sys
sys.stdin = open("../../../input.txt",'r')


N = int(input())
numbers = list(map(int,input().split(" ")))

left = 0
right = N-1

min_abs = abs(numbers[left]+numbers[right])
answers = [numbers[left],numbers[right]]

while(left < right):
  sum = numbers[left] + numbers[right]
  if(abs(sum) <= min_abs):
    min_abs = min(min_abs,abs(sum))
    answers = [numbers[left],numbers[right]]  
  
  if(sum < 0):
    left += 1
  elif(sum > 0):
    right -= 1
  else:
    break

print(" ".join(map(str,answers)))

  
