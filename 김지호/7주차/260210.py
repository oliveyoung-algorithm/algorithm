# https://www.acmicpc.net/problem/1439
# 뒤집기, 실버5

import sys
sys.stdin = open("../../../input.txt",'r')

S = input()

one_count = 0
zero_count = 0

index = 0
length = len(S)

while index < length:
  
  # index 위치부터 연속된 지역까지 탐색하기
  curr_index = index
  number = S[index] # 초기 숫자
  
  while curr_index < length and number == S[curr_index]:
    curr_index += 1
  
  if number == '0':
    zero_count += 1
  else:
    one_count += 1
  
  index = curr_index
  
# print(f"zero_count : {zero_count}")
# print(f"one_count : {one_count}")
print(min(zero_count,one_count))
