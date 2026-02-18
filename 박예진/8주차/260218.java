import java.util.*;

class Solution {
    
    static class Process {
        private int idx;
        private int prior;
        
        public Process(int idx, int prior) {
            this.idx = idx;
            this.prior = prior;
        }
    }
    
    public int solution(int[] priorities, int location) {
        int answer = 0;
        
        Queue<Process> q = new LinkedList<>(); // idx, prior
        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());
        
        for(int i = 0; i < priorities.length; i++){
            pq.add(priorities[i]);
            q.add(new Process(i, priorities[i]));
        }
        
        while(!q.isEmpty()){
            Process now = q.poll();
            
            // 우선순위 가장 큰 거 = 현재 우선순위 
            if (pq.peek() == now.prior) {
                pq.poll();
                answer++;
                if (now.idx == location) return answer;
            } else {
                q.add(now);
            }
        }
        
        return answer;
    }
}
