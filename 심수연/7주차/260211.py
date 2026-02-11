# https://www.acmicpc.net/problem/13458

import sys
input = sys.stdin.readline
 
N = int(input()) # 시험장의 개수 5
A = list(map(int, input().split())) # 각 시험장에 있는 응시자의 수 [10, 9, 10, 9, 10]
B, C = list(map(int, input().split())) # 7 20 | B: 총감독관이 한 시험장에서 감시할 수 있는 응시자의 수. # C: 부감독관이 한 시험장에서 감시할 수 있는 응시자의 수.
# 총감독관은 오직 1명만 있어야 하고, 부감독관은 여러 명 있어도 된다.
# 각 시험장마다 응시생을 모두 감독하기 위해 필요한 감독관의 최소 수는?

count = 0
# 총감독관 수는 N명
# 부감독관 수는 (A[i]-B) % C가 0이면 (A[i]-B) // C , 0이 아니면 (A[i]-B) // C + 1
# 최종: 총감독관 수(= N) + 부감독관 수 count

# B = 7, C가 20일 때
# 10 이면 3 // 20 -> 0 -> +1
# 9 면 2 // 20 -> 0 -> +1
for i in range(N):
  if A[i]-B < 0: # A[i] - B가 음수일 때
    sub = 0
  elif (A[i]-B) % C == 0:
    sub = (A[i]-B) // C
  else:
    sub = (A[i]-B) // C + 1
  count += sub

print(count + N)