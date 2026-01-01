import sys
input = sys.stdin.readline

N = int(input()) # 친구의 수 ex) 3
M = int(input()) # 게임의 수 ex) 4

target = list(map(int, input().split())) # [1, 2, 3, 2]
score = [0 for _ in range(N)] # 각 친구들이 얻은 합계 점수 초기화

for i in range(M):
  note = list(map(int, input().split())) # 각 친구들이 종이에 쓴 타겟
  for j in range(N): # 친구 수만큼 돌면서
    if note[j] == target[i]: # j번 친구가 쓴 타겟과, i번째 타겟이 같으면
      score[j] += 1 # j번 친구의 점수 올리기
    else: # j번 친구가 쓴 타겟과 다르다면, 
      score[target[i] - 1] += 1 # i번째 타겟의 점수 올리기

for i in range(N):
  print(score[i])