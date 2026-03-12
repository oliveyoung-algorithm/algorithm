//https://www.acmicpc.net/problem/17175
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_S3_17175_피보나치는지겨웡 {

	public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        
        int N = Integer.parseInt(br.readLine());
        
        if(N == 0) {
        	System.out.println(1);
        	return;
        }
        
        long [] dp = new long[N+1];
        
        dp[0] = 1;
        dp[1] = 1;
        
        for (int i = 2; i <= N; i++) {
            dp[i] = (1 + dp[i-1] + dp[i-2]) % 1000000007;
        }
        
        System.out.print(dp[N]);
        
    }
}
