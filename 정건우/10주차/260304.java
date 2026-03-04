//https://www.acmicpc.net/problem/31860
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class BOJ_S2_31860_열심히일하는중 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        PriorityQueue<Integer> pq = new PriorityQueue<>(Collections.reverseOrder());

        for (int i = 0; i < N; i++) {
            pq.add(Integer.parseInt(br.readLine()));
        }

        int ans = 0;
        int past = 0;
        StringBuilder sb = new StringBuilder();

        while(!pq.isEmpty()) {
            int score = pq.poll();
            int satis = (past/2) + score;

            sb.append(satis).append('\n');

            score -= M;

            if(score > K) pq.add(score);

            past = satis;
            ans++;
        }

        System.out.println(ans);
        System.out.println(sb.toString());
    }
}
