//https://www.acmicpc.net/problem/15656
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Arrays;
import java.util.StringTokenizer;

public class BOJ_S3_15656_N과M7 {
    static int [] nums, picks;
    static int N, M;
    static StringBuilder sb;

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        N = Integer.parseInt(st.nextToken());
        M = Integer.parseInt(st.nextToken());

        nums = new int[N];
        picks = new int[M];
        sb = new StringBuilder();

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            nums[i] = Integer.parseInt(st.nextToken());
        }

        Arrays.sort(nums);

        perm(0);

        System.out.println(sb.toString());

    }

    private static void perm(int depth) {
        if (depth == M) {
            for (int num : picks) {
                sb.append(num).append(" ");
            }

            sb.setLength(sb.length()-1);
            sb.append("\n");

            return;
        }

        for (int i = 0; i < N; i++) {
            picks[depth] = nums[i];
            perm(depth + 1);
        }

    }
}
