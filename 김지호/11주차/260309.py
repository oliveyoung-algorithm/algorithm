# https://www.acmicpc.net/problem/20125
# 쿠키의 신체 측정, 실버4

import sys
sys.stdin = open("../../../input.txt",'r')

N = int(input()) # 판의 크기

board = []
board.append([-1] * (N+1))

def print_2d_arr(array):
  for arr in array:
    print(arr)
    

for _ in range(N):
  array = list(input())
  array.insert(0,-1)
  
  board.append(array)

# print_2d_arr(board)

hasFoundFirst = False
heart = None # 심장 위치
for row in range(1,N+1):
  for col in range(1,N+1):
    value = board[row][col]
    
    if value == "*":
      # print(f"* 찾음 : {row},{col}")
      # 처음 찾는 경우
      if not hasFoundFirst:
        heart = [row+1,col]
        hasFoundFirst = True
        break
  if hasFoundFirst:
    break

answer = []
# 왼쪽 팔
heart_row, heart_col = heart
# print(f"심장 위치 : [{heart_row},{heart_col}]")
count = 0
for col in range(heart_col-1, 0, -1):
  if board[heart_row][col] == "*":
    count += 1
  else:
    break
answer.append(count)

# 오른쪽 팔
count = 0
for col in range(heart_col+1, N+1):
  if board[heart_row][col] == "*":
    count += 1
  else:
    break
answer.append(count)

# 허리 
count = 0
end_body = None
for row in range(heart_row+1, N+1):
  if board[row][heart_col] == "*":
    count += 1
  else:
    end_body = [row-1,heart_col]
    break
answer.append(count)
# print(f"허리가 끝나는 지점 : {end_body}")

# 왼쪽 다리
end_body_row, end_body_col = end_body

count = 0
for row in range(end_body_row+1, N+1):
  if board[row][end_body_col-1] == "*":
    count += 1
  else:
    break
answer.append(count)

# 오른쪽 다리
count = 0
for row in range(end_body_row+1, N+1):
  if board[row][end_body_col+1] == "*":
    count += 1
  else:
    break
answer.append(count)

# 심장 위치 출력
print(*heart) 

# 왼쪽 팔, 오른쪽 팔, 허리, 왼쪽 다리, 오른쪽 다리의 길이
print(*answer)
