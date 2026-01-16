//https://www.acmicpc.net/problem/29736
import java.util.Scanner;

public class BOJ_B4_29736_브실이와친구가되고싶어 {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		int A = scann.nextInt();
		int B = scann.nextInt();
		
		int K = scann.nextInt();
		int X = scann.nextInt();
		
		int min = Math.max(A, K-X);
		int max = Math.min(B, K+X);
		
		int diff = max-min+1;
		
		if(diff > 0) System.out.println(diff);
		else System.out.println("IMPOSSIBLE");

	}

}
