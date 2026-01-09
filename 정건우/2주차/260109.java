//https://www.acmicpc.net/problem/1359
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.HashSet;
import java.util.Set;
import java.util.StringTokenizer;

public class BOJ_S4_1359_복권 {
    static int N, M, K, total, win;
    static int [] picks;
    static boolean [] v;
    static Set<Integer> set;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        K = Integer.parseInt(st.nextToken());
        
        picks = new int[M];
        v = new boolean[N];
        set = new HashSet<>();

        for (int i = 0; i < M; i++) {
            set.add(i);
        }

        combi(0, 0);

        double ans = 1.0 * win / total;

        System.out.println(ans);

    }

    private static void combi(int start, int depth) {
        if(depth == M) {
            total++;

            int cnt = 0;
            for (int i = 0; i < M; i++) {
                if(set.contains(picks[i])) cnt++;
            }

            if(cnt >= K) win++;

            return;
        }

        for (int i = start; i < N; i++) {
            if(v[i]) continue;

            v[i] = true;
            picks[depth] = i;
            combi(i+1, depth+1);
            v[i] = false;
        }

    }
}
