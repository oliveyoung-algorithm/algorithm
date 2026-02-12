//https://www.acmicpc.net/problem/5949
import java.util.Scanner;

public class BOJ_B3_5949_AddingCommas {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        String N = scann.nextLine();
        int cnt = 0;

        for (int i = N.length()-1; i >= 0; i--) {
            if(cnt % 3 == 0) sb.append(',');

            sb.append(N.charAt(i));

            cnt++;
        }

        sb = sb.reverse();

        if(sb.charAt(sb.length()-1) == ','){
            sb.setLength(sb.length()-1);
        }

        System.out.println(sb.toString());
    }
}
