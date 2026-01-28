//https://www.acmicpc.net/problem/15624
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_S4_15624_피보나치수7 {
    static final int DIVIDER = 1000000007;
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] dp = new int[N+1];

        if(N >= 1) dp[1] = 1;

        for (int i = 2; i <= N; i++) {
            dp[i] = (dp[i-1] + dp[i-2]) % DIVIDER ;
        }

        System.out.println(dp[N]);

    }
}
