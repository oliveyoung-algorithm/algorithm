//https://www.acmicpc.net/problem/12026
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;

public class BOJ_S1_12026_BOJ거리 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] arr = new int[N];
        int [][] dp = new int[N][3];

        String str = br.readLine();

        for (int i = 0; i < N; i++) {
            char c = str.charAt(i);

            if(c == 'O') arr[i] = 1;
            else if (c == 'J') arr[i] = 2;

            Arrays.fill(dp[i], Integer.MAX_VALUE);
        }

        dp[0][0] = 0;

        for (int i = 1; i < N; i++) {
            int now = arr[i];
            int past = (now+2) % 3;

            for (int j = 0; j < i; j++) {
                if(arr[j] != past || dp[j][past] == Integer.MAX_VALUE) continue;

                int dist = (i-j)*(i-j);

                dp[i][now] = Math.min(dp[j][past] + dist, dp[i][now]);
            }
        }

        int ans = Integer.MAX_VALUE;

        for (int i = 0; i < 3; i++) {
            ans = Math.min(ans, dp[N-1][i]);
        }

        if(ans == Integer.MAX_VALUE) System.out.println(-1);
        else System.out.print(ans);
    }
}
