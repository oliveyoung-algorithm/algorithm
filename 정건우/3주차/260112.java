//https://www.acmicpc.net/problem/29700
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S4_29700_우당탕탕영화예매 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());
        int K = Integer.parseInt(st.nextToken());

        int [][] sum = new int[N][M+1];

        for (int i = 0; i < N; i++) {
            String s = br.readLine();
            for (int j = 0; j < M; j++) {
                int n = s.charAt(j) - '0';
                sum[i][j+1] = sum[i][j] + n;
            }
        }

        int cnt = 0;

        for (int i = 0; i < N; i++) {
            for (int j = K; j <= M; j++) {
                int diff = sum[i][j] - sum[i][j-K];

                if(diff == 0) cnt++;
            }
        }

        System.out.println(cnt);

    }
}
