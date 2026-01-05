import sys
input = sys.stdin.readline

N = int(input())

words = []

for i in range(N):
  words.append(input().strip())

words = list(set(words)) # 중복 제거 후 list로 감싸기
words.sort(key=lambda x:(len(x), x)) # 튜플로 두 가지 기준 비교. 1. 길이순 + 2. 알파벳순

for i in range(len(words)):
  print(words[i])

