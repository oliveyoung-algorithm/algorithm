//https://www.acmicpc.net/problem/32929
import java.util.Scanner;

public class BOJ_B5_32929_UOS문자열 {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);

        int N = scann.nextInt();
        char [] arr = "UOS".toCharArray();

        N = (N-1)%3;

        System.out.println(arr[N]);
    }
}
