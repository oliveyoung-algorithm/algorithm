# https://leetcode.com/problems/greatest-common-divisor-of-strings/?envType=problem-list-v2&envId=whcgn2eg

import sys
from collections import defaultdict
from collections import deque

sys.stdin = open("./input.txt",'r')


class Solution:
  def gcdOfStrings(self, str1: str, str2: str) -> str:
    #1. 최대공약수 M 구하기
    len1 = len(str1)
    len2 = len(str2)
    M = self.GCD(str1,str2)
    
    #2. M의 약수 길이로 str1을 짤라서 str를 만들고, 해당 str을 토대로 만든 문자열이 str1 / str2와 일치하는지 확인
    for num in range(M,0,-1):
      if(M % num == 0):
        target = str1[0:num]
        mul1 = len1 // num
        mul2 = len2 // num
        
        if(str1 == target * mul1 and str2 == target * mul2):
          return target
    return ""

        
  def GCD(self, str1, str2):
    N = len(str1)
    M = len(str2)
    min_number = min(N,M)
    for i in range(min_number,0,-1):
      if(N % i == 0 and M % i == 0):
        return i
    
    
answer = Solution()
print(answer.gcdOfStrings(str1 = "ABCABC", str2 = "ABC")) # "ABC"

print(answer.gcdOfStrings(str1 = "ABABAB", str2 = "ABAB")) # "AB"
print(answer.gcdOfStrings(str1 = "LEET", str2 = "CODE")) # ""
print(answer.gcdOfStrings(str1 = "AAAAAB", str2 = "AAA")) # ""