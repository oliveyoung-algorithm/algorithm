//https://www.acmicpc.net/problem/13699
import java.util.Scanner;

public class BOJ_S4_13699_점화식 {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		int N = scann.nextInt();
		long [] dp = new long[N+1];
		
		dp[0] = 1;
		
		for (int i = 1; i <= N; i++) {
			for (int j = 0; j < i; j++) {
				dp[i] += dp[j] * dp[i-j-1];
			}
		}
		
		System.out.println(dp[N]);

	}

}
