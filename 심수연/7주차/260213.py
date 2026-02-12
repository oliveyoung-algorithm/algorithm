# https://www.acmicpc.net/problem/10709
import sys
input = sys.stdin.readline

H, W = map(int, input().split())

graph = [list(input().strip()) for _ in range(H)]
# graph = [['c', '.', '.', 'c'], ['.', '.', 'c', '.'], ['.', '.', '.', '.']]
answer = []

# 한 행 기준이고, 구름은 오른쪽으로만 움직이므로 
# 왼쪽 가장 가까운 구름에서부터 떨어진 거리(cloud)를 구하면 된다

for i in range(H):
  time = []
  cloud = -1
  for j in range(W):
    if graph[i][j] == 'c':
      cloud = 0 # c면 0으로 초기화
    elif graph[i][j] != 'c' and cloud != -1: # c가 아니고, 이전 graph 에 구름이 있었다면
      cloud += 1 # cloud까지 떨어진 거리를 1씩 높이기
    time.append(cloud) # [0, 1, 2, 0]
    
  answer.append(time) # [[0, 1, 2, 0], [-1, -1, 0, 1], [-1, -1, -1, -1]]

for i in range(H):
  print(*answer[i])