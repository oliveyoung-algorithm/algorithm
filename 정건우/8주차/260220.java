//https://www.acmicpc.net/problem/1535
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S2_1535_안녕 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [][] arr = new int[N][2];
        int [] dp = new int[100];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i][0] =  Integer.parseInt(st.nextToken());
        }

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            arr[i][1] =  Integer.parseInt(st.nextToken());
        }

        for (int i = 0; i < N; i++) {
            int sad = arr[i][0];
            int joy = arr[i][1];

            for (int sum = 99; sum >= sad; sum--) {
                dp[sum] = Math.max(dp[sum], dp[sum - sad] + joy);
            }

        }

        int max = 0;

        for (int i = 0; i < 100; i++) {
            max = Math.max(max, dp[i]);
        }

        System.out.println(max);

    }
}
