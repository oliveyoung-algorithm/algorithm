import sys
import math
import copy
sys.stdin = open("../../../input.txt",'r')

# H,W,N,M = map(int,input().split(" "))

# print(math.ceil(H / (N+1)) * math.ceil(W / (M+1)))

# N = int(input())
# if N % 2 == 0:
#   print("CY")
# else:
#   print("SK")

verbs = set(['a','e','i','o','u'])
# print(verbs)
while True:
  # print()
  word = input()
  
  # 종료 조건
  if(word == "end"):
    break

  isVerb = None # 모음 여부
  acc = 0
  verbCount = 0
  # 같은 글자가 연속적으로 두번 오면 안되나, ee 와 oo는 허용한다.
  prev = None
  
  answer = True
  for char in word:
    # print(f"testing char : {char}")
    # 1. 같은 글자 여부 판단
    if prev == char and (char != 'e' and char != 'o'):
      # print("같은 글자가 여러번 나왔습니다, e, o가 아닙니다")
      answer = False
    
    # 2. 개수 판단
    # 모음인 경우
    if char in verbs:
      verbCount += 1
      if isVerb == True:
        acc += 1
      # 이전 : 자음
      else:
        acc = 1
      isVerb = True
    # 자음인 경우
    else:
      if isVerb == False: # 자음
        acc += 1
      else: # 이전 : 모음
        acc = 1
      isVerb = False
    
    if acc >= 3 :
      # print("연속 3번 이상 나옴")
      answer = False
      break
    prev = char
    
    # print(f"verbCount : {verbCount}")
  
  if answer == False or verbCount == 0:
    print(f"<{word}> is not acceptable.")
  else:
    print(f"<{word}> is acceptable.")
        
