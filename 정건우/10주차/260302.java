//https://www.acmicpc.net/problem/14729
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Collections;
import java.util.PriorityQueue;

public class BOJ_S5_14729_칠무해 {

	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		
		int N = Integer.parseInt(br.readLine());
		PriorityQueue<Double> pq = new PriorityQueue<>(7, Collections.reverseOrder());
		
		for (int i = 0; i < 7; i++) {
			pq.add(Double.parseDouble(br.readLine()));
		}
		
		for (int i = 0; i < N-7; i++) {
			double d = Double.parseDouble(br.readLine());
			
			if(pq.peek() > d) {
				pq.poll();
				pq.add(d);
			}
		}
		
		double [] ans = new double[7];
		for (int i = 0; i < 7; i++) {
			ans[i] = pq.poll();
		}
		
		for (int i = 6; i >= 0; i--) {
			System.out.printf("%.3f\n", ans[i]);
		}
		
	}

}
