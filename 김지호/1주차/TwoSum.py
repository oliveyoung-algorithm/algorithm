from typing import List
# O(N^2)
# class Solution:
#   def twoSum(self, nums: List[int], target: int) -> List[int]:
#     length = len(nums)
#     for i in range(length):
#       for j in range(i+1,length):
#         sum = nums[i] + nums[j]
#         if(sum == target):
#           return [i,j]
  
      
# O(N)
class Solution:
  def twoSum(self, nums: List[int], target: int) -> List[int]:
    numbers = {}
    answer = None
    for index, value in enumerate(nums):
      # 남은 값 존재유무
      leftOver = target - value
      if leftOver in numbers.keys():
        answer = [numbers[leftOver], index]
      else:
        numbers[value] = index
    return answer
      
solution = Solution()
print(solution.twoSum([2,7,11,15], target = 9))
print(solution.twoSum([3,2,4], target = 6))
print(solution.twoSum(nums = [3,3], target = 6))