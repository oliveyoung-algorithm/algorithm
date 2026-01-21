//https://www.acmicpc.net/problem/15886
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_S3_15886_내선물을받아줘2 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());

        char [] arr = br.readLine().toCharArray();
        int ans = 0;

        for (int i = 0; i < N-1; i++) {
            if(arr[i] == 'W') continue;

            if(arr[i] == 'E' && arr[i+1] == 'W') ans++;
        }

        System.out.println(ans);

    }
}
