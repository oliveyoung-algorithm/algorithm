from collections import Counter

# 알파벳인지 확인
def is_alpha(c):
    return ('a' <= c <= 'z') or ('A' <= c <= 'Z')

# 2글자씩 묶기
def make_multiset(s):
    arr = []
    for i in range(len(s) - 1):
        if is_alpha(s[i]) and is_alpha(s[i + 1]):
            arr.append((s[i] + s[i + 1]).lower())
    
    return arr

def solution(str1, str2):
    answer = 0
    
    arr1 = make_multiset(str1)
    arr2 = make_multiset(str2)
    
    m1 = Counter(arr1)
    m2 = Counter(arr2)
    
    intersection = 0
    union = 0
    
    # 교집합
    for key in m1:
        if key in m2:
            intersection += min(m1[key], m2[key])
    
    # 합집합
    keys = set(m1.keys()) | set(m2.keys())
    
    for key in keys:
        c1 = m1.get(key, 0)
        c2 = m2.get(key, 0)
        union += max(c1, c2)
        
    # 자카드 유사도
    if union == 0:
        return 65536
    
    return int((intersection / union) * 65536)
