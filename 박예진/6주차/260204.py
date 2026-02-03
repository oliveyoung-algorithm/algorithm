from collections import defaultdict
import math

dmin = dfee = umin = ufee = 0

def to_sec(time):
    return int(time[:2]) * 60 + int(time[3:5])

def calc(total_min):
    fee = dfee

    if total_min > dmin:
        extra = total_min - dmin
        fee += math.ceil(extra / umin) * ufee

    return fee

def solution(fees, records):
    global dmin, dfee, umin, ufee
    dmin, dfee, umin, ufee = fees
    
    m = defaultdict(list)
    
    for record in records:
        time, idx, cmd = record.split(" ")
        m[idx].append(to_sec(time))
        
    res = {} # 차량 idx, 주차요금
    
    # 모든 차량 돌아보기
    for idx, time in m.items():
        total = 0
        for i in range(1, len(time), 2):
            total += time[i] - time[i - 1]
            
        # 마지막 출차 없음
        if len(time) % 2 == 1: 
            total += to_sec("23:59") - time[-1]
    
        res[idx] = calc(total)
        
    # 결과 오름차순
    answer = [res[idx] for idx in sorted(res)]
    return answer
