//https://www.acmicpc.net/problem/28324

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_S4_28324_스케이트연습 {

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] nums = new int[N];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }

        long ans = 0;
        int expectNum = 1;

        for (int i = N-1; i >= 0; i--) {
            if(nums[i] >= expectNum) {
                ans += expectNum++;
            } else {
                ans += nums[i];
                expectNum = nums[i]+1;
            }
        }

        System.out.println(ans);

    }
}
