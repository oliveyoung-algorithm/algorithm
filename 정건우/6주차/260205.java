//https://www.acmicpc.net/problem/4388
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_B2_4388_받아올림 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringBuilder sb = new StringBuilder();
        StringTokenizer st;

        while(true) {
            st = new StringTokenizer(br.readLine());
            String n1 = st.nextToken();
            String n2 = st.nextToken();

            if(n1.equals("0") && n2.equals("0")) break;

            int [] arr1 = new int[n1.length()];
            for (int i = 0; i < n1.length(); i++) {
                arr1[i] = n1.charAt(n1.length()-1-i) - '0';
            }

            int [] arr2 = new int[n2.length()];
            for (int i = 0; i < n2.length(); i++) {
                arr2[i] = n2.charAt(n2.length()-1-i) - '0';
            }

            int cnt = getCnt(arr1, arr2);

            sb.append(cnt).append("\n");

        }

        System.out.println(sb.toString());

    }

    private static int getCnt(int[] arr1, int[] arr2) {
        int cnt = 0;
        boolean needAdd = false;

        for (int i = 0; i < Math.max(arr1.length, arr2.length); i++) {
            int num1 = arr1.length > i ? arr1[i] : 0;
            int num2 = arr2.length > i ? arr2[i] : 0;

            int sum = num1 + num2;
            if(needAdd) sum++;

            if(sum >= 10) {
                cnt++;
                needAdd = true;
            } else {
                needAdd = false;
            }
        }
        return cnt;
    }
}
