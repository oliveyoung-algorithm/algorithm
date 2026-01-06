//https://www.acmicpc.net/problem/1935

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Stack;

public class BOJ_S3_1935_후위표기식2 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        Stack<Double> stack = new Stack<>();
        double [] nums = new double[N];

        String s = br.readLine();

        for(int i = 0; i < N; i++) {
            nums[i] = Integer.parseInt(br.readLine());
        }

        for (int i = 0; i < s.length(); i++) {
            char c = s.charAt(i);

            switch(c) {
                case '+':
                    double a1 = stack.pop();
                    double a2 = stack.pop();
                    stack.push(a1 + a2);
                    break;
                case '-':
                    double b1 = stack.pop();
                    double b2 = stack.pop();
                    stack.push(b2 - b1);
                    break;
                case '*':
                    double c1 = stack.pop();
                    double c2 = stack.pop();
                    stack.push(c1 * c2);
                    break;
                case '/':
                    double d1 = stack.pop();
                    double d2 = stack.pop();
                    stack.push(d2 / d1);
                    break;
                default:
                    stack.push(nums[c-'A']);
                    break;
            }
        }

        System.out.printf("%.2f", stack.pop());

    }
}
