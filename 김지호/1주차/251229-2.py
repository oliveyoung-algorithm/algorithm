from typing import List


class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
      number_set = set()
      for num in nums:
        if num in number_set:
          return True
        number_set.add(num)
      return False

solution = Solution()
print(solution.hasDuplicate([1,2,3,4]))
print(solution.hasDuplicate([1,2,3,1]))
print(solution.hasDuplicate([1,1,1,3,3,4,3,2,4,2]))