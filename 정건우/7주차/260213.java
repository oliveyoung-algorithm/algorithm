//https://www.acmicpc.net/problem/17216
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S2_17216_가장큰감소부분수열 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] arr = new int[N];
        int [] dp = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i] = Integer.parseInt(st.nextToken());
            dp[i] = arr[i];
        }

        for (int i = 1; i < N; i++) {
            for (int j = 0; j < i; j++) {
                if(arr[j] > arr[i]) {
                    dp[i] = Math.max(dp[i], dp[j] + arr[i]);
                }
            }
        }

        int max = 0;
        for (int i = 1; i < N; i++) {
            max = Math.max(max, dp[i]);
        }

        System.out.println(max);

    }
}
