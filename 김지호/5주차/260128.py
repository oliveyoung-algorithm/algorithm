# https://www.acmicpc.net/problem/25206
# 너의 평점은, 실버5

import sys
sys.stdin = open("./input.txt",'r')

scores = {
  "A+" : 4.5,
  "A0" : 4.0, 
  "B+" : 3.5,
  "B0" : 3.0,
  "C+" : 2.5,
  "C0" : 2.0,
  "D+" : 1.5,
  "D0" : 1.0,
  "F" : 0.0,
}

sum_등급 = 0.0
sum_학점 = 0.0

for _ in range(20):
  _, 학점, 등급 = input().split(" ")
  if(등급 != "P"):
    sum_등급 += float(학점) * scores[등급]
    sum_학점 += float(학점)
print(sum_등급 / sum_학점)

