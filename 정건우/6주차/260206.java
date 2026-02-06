//https://www.acmicpc.net/problem/13234
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class BOJ_B2_13234_GeorgeBoole {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        boolean v1 = st.nextToken().equals("true");
        String option = st.nextToken();
        boolean v2 = st.nextToken().equals("true");

        if(option.equals("AND")) {
            System.out.println(v1 && v2);
        } else {
            System.out.println(v1 || v2);
        }

    }
}
