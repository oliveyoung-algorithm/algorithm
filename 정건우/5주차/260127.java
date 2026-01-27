//https://www.acmicpc.net/problem/20044
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ_S4_20044_ProjectTeams {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        int [] nums = new int[N*2];

        StringTokenizer st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N*2; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(nums);

        int min = Integer.MAX_VALUE;

        for (int i = 0; i < N; i++) {
            int sum = nums[i]+nums[2*N-1-i];

            min = Math.min(min, sum);
        }

        System.out.println(min);

    }
}
