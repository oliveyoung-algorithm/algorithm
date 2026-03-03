//https://www.acmicpc.net/problem/20365
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_S3_20365_블로그2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        String str = br.readLine();

        int red = 0;
        int blue = 0;
        char past = ' ';

        for (int i = 0; i < N; i++) {
            char c = str.charAt(i);

            if(c != past) {
                if(c == 'R') red++;
                else blue++;

                past = c;
            }
        }

        if(red == 0 || blue == 0) System.out.println(Math.max(red, blue));
        else System.out.println(Math.min(red, blue)+1);

    }
}
