//https://www.acmicpc.net/problem/14495
import java.util.Scanner;

public class BOJ_S4_14495_피보나치비스무리한수열 {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);

        int N = scann.nextInt();

        if(N <= 3) {
            System.out.println(1);
            return;
        }

        long [] dp = new long[N+1];

        dp[1] = 1;
        dp[2] = 1;
        dp[3] = 1;

        for (int i = 4; i <= N; i++) {
            dp[i] = dp[i-1] + dp[i-3];
        }

        System.out.println(dp[N]);
    }
}
