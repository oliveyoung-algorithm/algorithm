//https://www.acmicpc.net/problem/15815
import java.util.Scanner;
import java.util.Stack;

public class BOJ_S3_15815_천재수학자성필 {

	public static void main(String[] args) {
		Scanner scann = new Scanner(System.in);
		
		String s = scann.nextLine();
		Stack<Long> stack = new Stack<>();
	        
	       for (char c : s.toCharArray()) {
	           if (Character.isDigit(c)) {
	        	   stack.push((long)(c - '0'));
	           } else {
	               long op2 = stack.pop();
	               long op1 = stack.pop();
	               long res = 0;
	               
	               switch (c) {
	                   case '+':
	                       res = op1 + op2;
	                       break;
	                   case '-':
	                       res = op1 - op2;
	                       break;
	                   case '*':
	                       res = op1 * op2;
	                       break;
	                   case '/':
	                       res = op1 / op2;
	                       break;
	                   default:
	                	   break;
	               }
	               
	               stack.push(res);
	           }
	           
	       }
	       
	       System.out.println(stack.pop());

	}

}
