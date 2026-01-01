# 시도1: 시간초과 / 시간복잡도 : O(N^2)
# # 두개의 구성요소 Set이 Anagram 관계인지 판단하는 함수
# def isAnagram(s, t) -> bool:
#   # print(f"Anagram test, {s}, {t}")
#   s_cp = copy.deepcopy(s)
#   #1. 하나씩 뺴기
#   for value,count in t.items():
#     # 값이 다름
#     if value not in s or s_cp[value] != count:
#       # print("❌ ANAGRAM FAIL1")
#       return False
#     # 값이 같음
#     else:
#       del s_cp[value]
  
#   #2. s에 남아있으면 길이가 맞지 않았떤 것
#   if(len(s_cp) != 0):
#     # print("❌ ANAGRAM FAIL2")
#     return False

#   # print("✅ ANAGRAM COMPLETE")
#   return True
    
  
  


# class Solution:
#   def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
#     set_groups = []
#     answer = []
#     for str in strs:
#       # print(f"✅ Testing String: {str}" )
#       #1. 각 구성요소에 대해
#       str_set = {}
#       for value in str:
#         str_set[value] = str_set.get(value,0) + 1
#       # print(f"집합 : {str_set}")
      
#       #2. 어떤 구성에 속하는지?
#       isInSetGroup = False
#       for index,group in enumerate(set_groups):
#         if(isAnagram(str_set, group) == True):
#           answer[index].append(str)
#           isInSetGroup = True
#           break
      
#       if(isInSetGroup == False):
#         set_groups.append(str_set)
#         answer.append([str])
#       # print(answer)
#     return answer

# 시도2: O(n * mlogm) : n = strs의 길이, m = strs의 최대 길이
from typing import List
from collections import defaultdict

class Solution:
  def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
    # 정렬된 문자열을 키로 사용하여 그룹화
    # 같은 anagram은 정렬 후 동일한 문자열이 됨
    anagram_map = defaultdict(list)
    
    for s in strs:
      # 문자열을 정렬하여 anagram의 고유 키 생성
      sorted_key = ''.join(sorted(s))
      anagram_map[sorted_key].append(s)
    
    # 딕셔너리의 값들을 리스트로 변환하여 반환
    return list(anagram_map.values())

        
solution = Solution()
print(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(solution.groupAnagrams(["eat","tea","tan","ate","nat","bat"]))
print(solution.groupAnagrams(["ddddddddddg","dgggggggggg"]))
