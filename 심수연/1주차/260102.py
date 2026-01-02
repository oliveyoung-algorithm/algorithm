import sys
input = sys.stdin.readline

N = int(input())
arr = list(map(int, input().split())) # ex) [3, 1, 4, 3, 2]
arr.sort() # 정렬 [1, 2, 3, 3, 4]
count = 0

# 1+1+2+1+2+3+1+2+3+3+1+2+3+3+4
# = 1*5 + 2*4 + 3*3 + 3*2 + 4*1
# => count += arr[i] * (N - i)

for i in range(N):
  count += arr[i] * (N - i)

print(count)