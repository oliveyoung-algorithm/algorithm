# https://www.acmicpc.net/problem/7785

import sys
input = sys.stdin.readline

N = int(input())

company = set()

for _ in range(N):
  name, status = input().split()
  if status == "enter":
    company.add(name)
  elif name in company and status == "leave":
    company.discard(name)

for name in sorted(company, reverse=True):
  print(name)