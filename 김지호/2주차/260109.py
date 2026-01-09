import sys

# 재귀 깊이 제한 늘리기 (필수!)
sys.setrecursionlimit(20000)

class Node:
  def __init__(self, value):
    self.value = value
    self.left = None   
    self.right = None  

class BinarySearchTree:
  def __init__(self):
    self.root = None 

  def insert(self, value):
    if self.root is None:
      self.root = Node(value)
      return

    current = self.root
    while True:
      if value < current.value: 
        if current.left is None: 
          current.left = Node(value)
          break
        current = current.left 
      else: 
        if current.right is None:
          current.right = Node(value)
          break
        current = current.right
  
    # 후위 순회
    def print_postorder(self):
      self._postorder_recursive(self.root)

    def _postorder_recursive(self, node):
      if node is not None:
        self._postorder_recursive(node.left)   # Left
        self._postorder_recursive(node.right)  # Right
        print(node.value) 

tree = BinarySearchTree()

lines = sys.stdin.readlines()
for line in lines:
  try:
    num = int(line.strip())
    tree.insert(num)
  except ValueError:
    continue

tree.print_postorder()