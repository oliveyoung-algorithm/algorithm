//https://www.acmicpc.net/problem/9243
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_B2_9243_파일완전삭제 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        char [] arr = br.readLine().toCharArray();
        String s2 = br.readLine();

        if(N % 2 == 1) {
            for(int i = 0; i < s2.length(); i++) {
                arr[i] = arr[i] == '1' ? '0' : '1';
            }
        }

        String s1 = String.valueOf(arr);

        if(s1.equals(s2)) {
            System.out.println("Deletion succeeded");
        } else {
            System.out.println("Deletion failed");
        }

    }
}
