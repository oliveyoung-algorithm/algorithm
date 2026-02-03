//https://www.acmicpc.net/problem/9659
import java.util.Scanner;

public class BOJ_S3_9569_돌게임5 {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		long N = scann.nextLong();
		String winner = N % 2 == 0 ? "CY" : "SK";
		
		System.out.println(winner);

	}

}
