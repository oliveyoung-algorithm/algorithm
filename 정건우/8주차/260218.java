import java.util.Scanner;

public class BOJ_B4_27332_November {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		int A = scann.nextInt();
		int B = scann.nextInt();
		int sum = A+B*7;
		
		if(sum <= 30) {
			System.out.println(1);
		} else {
			System.out.println(0);
		}

	}

}
