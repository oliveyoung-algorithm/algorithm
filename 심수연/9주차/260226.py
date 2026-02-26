# https://www.acmicpc.net/problem/14502

from collections import deque
import sys
import copy
input = sys.stdin.readline

N, M = map(int, input().split())
graph = [list(map(int, input().split())) for _ in range(N)]
# 0: 빈 칸, 1: 벽, 2: 바이러스

# 상하좌우
dx = [-1, 1, 0, 0]
dy = [0, 0, -1, 1]

empty_spaces = [] # 벽을 세울 수 있는 위치 (빈 칸인 곳)
for i in range(N):
  for j in range(M):
    if graph[i][j] == 0:
      empty_spaces.append((i, j))
      
def bfs():
  queue = deque()
  copy_graph = copy.deepcopy(graph) # 복사
  
  # 바이러스 초기 위치를 queue에 넣기
  for i in range(N):
    for j in range(M):
      if copy_graph[i][j] == 2:
        queue.append((i, j))
  
  # bfs로 바이러스 퍼뜨리기
  while queue:
    x, y = queue.popleft()
    for i in range(4):
      nx = x + dx[i]
      ny = y + dy[i]

      if 0 <= nx < N and 0 <= ny < M and copy_graph[nx][ny] == 0:
        copy_graph[nx][ny] = 2 # 바이러스 감염시키기
        queue.append((nx, ny))
  
  # 바이러스 모두 퍼진 후 0인 부분(안전 영역) 세기
  count = 0
  for i in range(N):
    for j in range(M):
      if copy_graph[i][j] == 0:
        count += 1
  return count

def make_wall(count, start): # 빈 칸 중에서 3개를 골라 벽을 세우는 모든 경우의 수
  # 벽 3개가 세워지면 바이러스 퍼트리기
  global result
  
  if count == 3: # 벽을 세운 후 안전 영역이 확정되었을 때
    result = max(result, bfs()) # 안전 영역 개수 세기 위해 bfs 사용
    return # 종료
  
  for idx in range(start, len(empty_spaces)): # 중복 제거 위해 start 넣는것! ex) ABC = BCA
    i, j = empty_spaces[idx]
    graph[i][j] = 1 # 벽 세우고
    make_wall(count + 1, idx + 1) # 재귀: 두 번째 벽 세우기 -> start가 idx + 1이 됨
    graph[i][j] = 0 # 다시 벽 허물기 (백트래킹: 일단 해보고, 아니면 되돌아가는 탐색 방법) 3개의 벽을 세울 수 있는 모든 경우의 수를 다 보기 위해서
  
# empty_spaces = [A, B, C, D] 라고 했을 때
# ABC -> C 허물고 D 선택 -> ABD -> B 허물고 C 선택 -> ACD -> A 허물고 B 선택 -> BCD
# 이렇게 1 2 3 3 2 1 로 재귀 돌면서 백트래킹

result = 0 # 최대 안전 영역 크기
make_wall(0, 0) # count = 0, start = 0으로 초기화하고 벽 세우기

print(result)