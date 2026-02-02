/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {
        // 시작시간으로 정렬
        intervals.sort((a,b)=>{
            return a.start-b.start;
        })

        // 끝시간 - 시작시간 비교
        for(let i=0;i<intervals.length-1;i++){
            if(intervals[i].end > intervals[i+1].start) return false;
        }
        return true;
    }
}
