# https://leetcode.com/problems/reorganize-string/description/?envType=problem-list-v2&envId=whcgn2eg

from math import ceil

class Solution:
  def reorganizeString(self, s: str) -> str:
    answer = [''] * len(s)
    counts = {}
    for string in s:
      if string in counts: counts[string] += 1
      else: counts[string] = 1
    
    # 내림차순 정렬
    sort = sorted(counts.items(), key=lambda x: x[1], reverse=True)  
    
    # 불가능조건
    if sort[0][1] > ceil(len(s) / 2): 
      answer = ''
      return answer
    
    i = 0
    for key, _ in sort:
      while counts[key] > 0:
        answer[i] = key
        i += 2
        counts[key] -= 1
        if i >= len(answer): 
          i = 1
        
    return ''.join(answer)

answer = Solution()
print(answer.reorganizeString("aaab"))