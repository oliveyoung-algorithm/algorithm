import java.util.Scanner;

public class BOJ_B4_18330_Petrol {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);

        int N = scann.nextInt();
        int K = scann.nextInt();

        int card = K+60;

        if(N <= card) {
            System.out.println(N*1500);
        } else {
            System.out.println(card*1500 + (N-card)*3000);
        }

    }
}
