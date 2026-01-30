//https://www.acmicpc.net/problem/22193
import java.math.BigInteger;
import java.util.Scanner;

public class BOJ_B5_22193_Multiply {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		int N = scann.nextInt();
		int M = scann.nextInt();
		
		BigInteger A = scann.nextBigInteger();
		BigInteger B = scann.nextBigInteger();
		
		System.out.println(A.multiply(B));

	}

}
