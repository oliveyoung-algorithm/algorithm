//https://www.acmicpc.net/problem/20162
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_S2_20162_간식파티 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] arr = new int[N];
        int [] dp = new int[N];

        for (int i = 0; i < N; i++) {
            int score = Integer.parseInt(br.readLine());
            arr[i] = score;
            dp[i] = score;
        }

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < i; j++) {
                if (arr[j] >= arr[i]) continue;

                dp[i] = Math.max(dp[i], dp[j]+arr[i]);
            }
        }

        int max = 0;
        for (int i = 0; i < N; i++) {
            max = Math.max(max, dp[i]);
        }

        System.out.println(max);

    }
}
