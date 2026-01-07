//https://www.acmicpc.net/problem/2865
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class BOJ_S4_2865_나는위대한슈퍼스타K {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        Map<Integer, Double> map = new HashMap<>();

        for (int i = 0; i < M; i++) {
            st = new StringTokenizer(br.readLine());

            for (int j = 0; j < N; j++) {
                int idx = Integer.parseInt(st.nextToken());
                double score = Double.parseDouble(st.nextToken());

                if (map.getOrDefault(idx, 0.0) < score) {
                    map.put(idx, score);
                }
            }
        }

        PriorityQueue<Double> pq = new PriorityQueue<>(map.size(), Collections.reverseOrder());
        pq.addAll(map.values());
        map.clear();

        double ans = 0.0;

        for (int i = 0; i < K && !pq.isEmpty(); i++) {
            ans += pq.poll();
        }

        System.out.printf("%.1f", ans);

    }
}
