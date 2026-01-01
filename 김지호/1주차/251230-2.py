# class Solution:
#   def isAnagram(self, s: str, t: str) -> bool:
#     #0. 조기 종료 (길이가 다름)
#     if(len(s) != len(t)):
#       return False
    
#     #1. 구성요소 구하기
#     s_set = {}
#     for val in s:
#       if(val not in s_set):
#         s_set[val] = 1
#       else:
#         s_set[val] += 1
    
#     #2. 하나씩 뺴기
#     for val in t:
#       if val not in s_set: 
#         return False
#       elif s_set[val] <= 0:
#         return False
#       else:
#         s_set[val] -= 1
#     return True

# 리펙토링
class Solution:
  def isAnagram(self, s: str, t: str) -> bool:
    #0. 조기 종료 (길이가 다름)
    if(len(s) != len(t)):
      return False
    
    #1. 구성요소 구하기
    s_set = {}
    for val in s:
      s_set[val] = s_set.get(val,0) + 1 # 초기화 방법 리펙토링
    
    #2. 하나씩 뺴기
    for val in t:
      if val not in s_set or s_set[val] <= 0: 
        return False
      else:
        s_set[val] -= 1
    return True
  
solution = Solution()
print(solution.isAnagram("anagram","nagaram"))
print(solution.isAnagram("rat","car"))
print(solution.isAnagram("rat","ra"))
print(solution.isAnagram("aacc","ccac"))
