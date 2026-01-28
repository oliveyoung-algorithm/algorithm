# https://www.acmicpc.net/problem/4358

import sys
input = sys.stdin

dict = {}

for i in input:
  word = i.strip()
  if not word: 
    continue
  
  if word in dict:
    dict[word] += 1
  else:
    dict[word] = 1

# print(dict)
# {'Red Alder': 1, 'Ash': 4, 'Aspen': 1, 'Basswood': 1, 'Beech': 1, 'Yellow Birch': 1, 'Cherry': 1, 'Cottonwood': 1, 'Cypress': 1, 'Red Elm': 1, 'Gum': 1, 'Hackberry': 1, 'White Oak': 3, 'Hickory': 1, 'Pecan': 1, 'Hard Maple': 1, 'Soft Maple': 1, 'Red Oak': 2, 'Poplan': 1, 'Sassafras': 1, 'Sycamore': 1, 'Black Walnut': 1, 'Willow': 1}

# 조건: 사전순으로 출력하고, 그 종이 차지하는 비율을 백분율로 소수점 4째자리까지 반올림

total = sum(dict.values())

for word in sorted(dict):
  ratio = dict[word] / total * 100
  print(f"{word} {ratio:.4f}") # 소수점 4째자리까지 반올림
 