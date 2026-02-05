# https://www.acmicpc.net/problem/1057
# 토너먼트, 실버4

import sys
sys.stdin = open("../../../input.txt",'r')

N, x1,x2 = map(int,input().split(" "))

targets = [x1,x2]
players = []
for i in range(1,N+1):
  players.append(i)

step = 0
isDone = False
while not isDone:
  step += 1
  # print()
  # print(f"step : {step}")
  # print(f"players : {players}")
  
  length = len(players)
  new_players = []
  for i in range(0,length,2):
    # 혼자 겨뤄
    if i == length-1:
      # print("마지막임")
      new_players.append(players[i])
      continue
    
    # 정답 찾음
    if players[i] in targets and players[i+1] in targets:
      # print("정답 찾음")
      isDone = True
      break
    else:
      # 타겟이 있는 경우에는 이겨야 하고, 아니면 아무나 넣어
      if players[i] in targets:
        # print(f"1.타겟이 있음 : {players[i]}")
        new_players.append(players[i])
      elif players[i+1] in targets:
        # print(f"2.타겟이 있음 : {players[i+1]}")
        new_players.append(players[i+1])
      else:
        # print(f"3.타겟이 없음 : {players[i]}")
        new_players.append(players[i])
  # print(f"new players : {new_players}")
  players = new_players
print(step)
      
    
      
  
    
