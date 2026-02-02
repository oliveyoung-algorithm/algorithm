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
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if (!intervals || intervals.length === 0) return 0;

        intervals.sort((a, b) => a.start - b.start);

        let rooms = []; 

        for (let i = 0; i < intervals.length; i++) {
            let assigned = false;

            for (let j = 0; j < rooms.length; j++) {
                if (rooms[j] <= intervals[i].start) {
                    rooms[j] = intervals[i].end;
                    assigned = true;
                    break;
                }
            }
            
            if (!assigned) {
                rooms.push(intervals[i].end);
            }
        }
        
        return rooms.length;
    }
}
