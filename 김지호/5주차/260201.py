# https://www.acmicpc.net/problem/15662
# 톱니바퀴 (2), 골드5

import sys
import copy
from collections import deque, defaultdict
from typing import List
sys.stdin = open('../../../input.txt', 'r')

T = int(input())
board = []
board.append([0] * 8)
for _ in range(T):
  board.append(list(map(int,str(input()))))


def print_2d_Arr(array):
  for arr in array:
    print(arr)

# print("초기 보드 형태")
# print_2d_Arr(board)

    
K = int(input()) # 총 회전 횟수

# 각 회전에 대해
TIME_3 = 2
TIME_9 = 6

def rotate(array,dir):
  length = len(array)
  # 시계방향 회전
  new_array = [0] * length
  if(dir == 1):
    for i in range(length):
      if(i == 0):
        new_array[i] = array[length-1]
      else:
        new_array[i] = array[i-1]
    
    
  # 반시계방향 회전
  if(dir == -1):
    for i in range(length):
      if(i == length-1):
        new_array[i] = array[0]
      else:
        new_array[i] = array[i+1]

  return new_array
    

for _ in range(K):
  start, dir = map(int,input().split(" "))
  
  directions = [0] * (T+1) 
  directions[start] = dir
  
  # 아래 전파
  curr = start
  while True:
    next = curr + 1
    if next > T:
      break
    
    # 회전 전파 조건
    if board[curr][TIME_3] != board[next][TIME_9]:
      directions[next] = directions[curr] * -1
      curr = next
    else:
      break
  
  # 위 전파
  curr = start
  while True:
    prev = curr - 1
    if prev < 1:
      break
    
    # 회전 전파 조건
    if board[curr][TIME_9] != board[prev][TIME_3]:
      directions[prev] = directions[curr] * -1
      curr = prev
    else:
      break
  
  # 회전
  # print("회전 방향")
  # print(directions)
  
  for idx, dir in enumerate(directions):
    if(dir != 0):
      board[idx] = rotate(board[idx],dir)
    
  
  # print("회전 후")
  # print_2d_Arr(board)
  # print()

# 12시 방향이 S극인 톱니바퀴의 개수 출력
answer = 0
for array in board:
  if array[0] == 1:
    answer += 1
print(answer)
