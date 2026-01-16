# https://www.acmicpc.net/problem/10866

import sys
from collections import deque
input = sys.stdin.readline

N = int(input())

deque = deque()

for i in range(N):
  command = input().split()
  if command[0] == 'push_front':
    deque.appendleft(command[1])
  elif command[0] == 'push_back':
    deque.append(command[1])
  elif command[0] == 'pop_front':
    if not deque:
      print(-1)
    else:
      print(deque.popleft())
  elif command[0] == 'pop_back':
    if not deque:
      print(-1)
    else:
      print(deque.pop())
  elif command[0] == 'size':
    print(len(deque))
  elif command[0] == 'empty':
    if not deque:
      print(1)
    else:
      print(0)
  elif command[0] == 'front':
    if not deque:
      print(-1)
    else:
      print(deque[0])
  else:
    if not deque:
      print(-1)
    else:
      print(deque[-1])