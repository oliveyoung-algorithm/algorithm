n, k = map(int, input().split())
people = list(range(1, n + 1)) #둥글게 모여앉은 사람들
k_index = 0
result = []

for i in range(n): #n번만 반복하면 되니까
	k_index = (k_index + k - 1) % len(people)
	result.append(people.pop(k_index))
    
print('<' + str(result)[1:-1] + '>')
