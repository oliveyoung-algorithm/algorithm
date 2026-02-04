//https://www.acmicpc.net/problem/14623
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_B2_14623_감정이입 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		long B1 = Long.parseLong(br.readLine(), 2);
		long B2 = Long.parseLong(br.readLine(), 2);
		
		String ans = Long.toBinaryString(B1 * B2);
		
		System.out.println(ans);
		
	}

}
