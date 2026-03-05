# https://www.acmicpc.net/problem/10431
# 줄세우기, 실버5

import sys
sys.stdin = open("../../../input.txt",'r')

P = int(input()) # 시도 횟수


def solve():
  inputs = list(map(int,input().split(" ")))
  step = inputs[0]
  numbers = inputs[1:]
  
  answer = 0
  
  length = len(numbers)
  
  array = []
  for i in range(length): 
    isIn = False
    for j in range(i):
      if numbers[i] < array[j]:
        array.insert(j,numbers[i])
        answer += i-j
        isIn = True
        break
    
    if isIn == False:
      array.append(numbers[i])
  
  print(f"{step} {answer}")
  
for _ in range(P):
  solve()
