//https://www.acmicpc.net/problem/12845
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S3_12845_모두의마블 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] cards = new int[N];
        int ans = 0;

        int max = -1;

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            cards[i] = Integer.parseInt(st.nextToken());
            ans += cards[i];

            if(cards[i] > max) {
                max = cards[i];
            }
        }

        ans -= max;
        ans += (max * (N-1));

        System.out.println(ans);

    }
}
