//https://www.acmicpc.net/problem/5698
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class BOJ_B2_5698_Tautoqram {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringBuilder sb = new StringBuilder();
		
		while(true) {
			String s = br.readLine();
			
			if(s.equals("*")) break;
			
			boolean check = true;
			
			String [] arr = s.split(" ");
			char c1 = arr[0].toLowerCase().charAt(0);
			
			for (int i = 1; i < arr.length; i++) {
				char c2 = arr[i].toLowerCase().charAt(0);
				
				if(c1 != c2) {
					check = false;
					break;
				}
			}
			
			if(check) sb.append('Y').append('\n');
			else sb.append('N').append('\n');	
		}
		
		if(sb.length() > 0) sb.setLength(sb.length()-1);
		System.out.println(sb.toString());
		
	}

}
