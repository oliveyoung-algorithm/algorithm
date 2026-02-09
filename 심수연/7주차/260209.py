# https://www.acmicpc.net/problem/20546

import sys
input = sys.stdin.readline

cash = int(input())
stock = list(map(int, input().split()))

JH = cash # 준현 초기 자산
SM = cash # 성민 초기 자산

JH_total = 0 # 준현 최종 자산
JH_count = 0 # 준현 주식 개수

for date in range(len(stock)):
  if JH >= stock[date]:
    JH_count += JH // stock[date] # 주식 개수
    JH %= stock[date]

JH_total = JH + JH_count * stock[-1]

SM_total = 0 # 성민 최종 자산
SM_count = 0 # 성민 주식 개수

# 4일째부터 1, 2, 3일거 확인하는거임. -> 3
# 14일째도 팔려면 팔 수 있어야 함. -> 13
for date in range(3, len(stock)):
  # 3일 연속 하락하면, 전량 매수한다.
  if stock[date - 1] < stock[date - 2] < stock[date - 3] and SM >= stock[date]:
    past = SM # 100
    SM_count += SM // stock[date] # 주식 개수
    SM %= stock[date] # 남은 돈

  # 가격이 3일째 상승한다면, 전량 매도한다.
  elif stock[date - 1] > stock[date - 2] > stock[date - 3] and SM_count > 0:
    SM += SM_count * stock[date]
    SM_count = 0
  
SM_total = SM + SM_count * stock[-1]

if SM_total > JH_total:
  print("TIMING")
elif JH_total> SM_total:
  print("BNP")
else:
  print("SAMESAME")