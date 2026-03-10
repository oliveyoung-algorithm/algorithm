//https://www.acmicpc.net/problem/17127
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S5_17127_벚꽃이정보섬에피어난이유 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] trees = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            trees[i] = Integer.parseInt(st.nextToken());
        }

        int max = 0;

        // i: 기준점 1
        for (int i = 1; i < N; i++) {
            int a = 1;
            for (int x = 0; x < i; x++) {
                a *= trees[x];
            }

            // j: 기준점 2
            for (int j = i+1; j < N; j++) {
                int b = 1;
                for (int x = i; x < j; x++) {
                    b *= trees[x];
                }

                // k: 기준점 3
                for (int k = j+1; k < N; k++) {
                    int c = 1;
                    for (int x = j; x < k; x++) {
                        c *= trees[x];
                    }

                    int d = 1;
                    for (int x = k; x < N; x++) {
                        d *= trees[x];
                    }

                    int sum = a + b + c + d;
                    max = Math.max(max, sum);
                }
            }
        }

        System.out.println(max);


    }
}
