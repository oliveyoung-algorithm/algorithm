//https://www.acmicpc.net/problem/23351
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.PriorityQueue;
import java.util.StringTokenizer;

public class BOJ_S3_23351_물주기 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());
        int A = Integer.parseInt(st.nextToken());
        int B = Integer.parseInt(st.nextToken());

        PriorityQueue<Integer> pq = new PriorityQueue<>();

        N = N % A == 0 ? N/A : N/A + 1;

        for (int i = 0; i < N; i++) {
            pq.add(K);
        }

        int ans = 0;

        while (!pq.isEmpty() && ++ans <= pq.peek()) {
            pq.add(pq.poll()+B);
        }

        System.out.println(ans-1);

    }
}
