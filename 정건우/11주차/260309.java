//https://www.acmicpc.net/problem/11969
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S3_11969_BreedCounting {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int Q = Integer.parseInt(st.nextToken());

        int [][] sum = new int[N+1][3];

        for (int i = 1; i <= N; i++) {
            for (int j = 0; j < 3; j++) {
                sum[i][j] = sum[i-1][j];
            }

            int n = Integer.parseInt(br.readLine())-1;
            sum[i][n]++;
        }

        for (int i = 0; i < Q; i++) {
            st = new StringTokenizer(br.readLine());
            int a = Integer.parseInt(st.nextToken());
            int b = Integer.parseInt(st.nextToken());

            int x = sum[b][0] - sum[a-1][0];
            int y = sum[b][1] - sum[a-1][1];
            int z = sum[b][2] - sum[a-1][2];

            sb.append(x).append(" ").append(y).append(" ").append(z).append('\n');
        }

        if(sb.length() > 0) sb.setLength(sb.length()-1);
        System.out.println(sb.toString());

    }
}
