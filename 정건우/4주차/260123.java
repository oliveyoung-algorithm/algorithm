//https://www.acmicpc.net/problem/28447
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S2_28447_마라탕재료고르기 {
    static int N, M, max;
    static boolean [] picked;
    static int [][] taste;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());
        picked = new boolean[N];
        taste = new int[N][N];
        max = Integer.MIN_VALUE;

        for (int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 0; j < N; j++) {
                taste[i][j] = Integer.parseInt(st.nextToken());
            }
        }

        combi(0, 0, 0);

        System.out.println(max);

    }

    private static void combi(int start, int depth, int sum) {
        if (depth == M) {
            max = Math.max(max, sum);
            return;
        }

        for (int i = start; i < N; i++) {
            if(picked[i]) continue;

            for (int j = 0; j < N; j++) {
                if(picked[j]) sum += taste[i][j];
            }

            picked[i] = true;

            combi(i+1, depth + 1, sum);

            picked[i] = false;

            for (int j = 0; j < N; j++) {
                if (picked[j]) sum -= taste[i][j];
            }

        }

    }
}
