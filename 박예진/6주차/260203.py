def to_sec(t):
    return int(t[:2]) * 60 + int(t[3:5])

def solution(video_len, pos, op_start, op_end, commands):
    now = to_sec(pos)
    ostart = to_sec(op_start)
    oend = to_sec(op_end)
    video = to_sec(video_len)
    
    # 시작 위치가 오프닝 구간인 경우
    if ostart <= now <= oend:
        now = oend
    
    for c in commands:
        if c == "next":
            now += 10
            if now > video:
                now = video
        elif c == "prev":
            now -= 10
            if now < 0:
                now = 0

        # 현위치 오프닝 구간이면 끝나는 위치로 이동
        if ostart <= now <= oend:
            now = oend
        
    return f"{now // 60:02d}:{now % 60:02d}"
