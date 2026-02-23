//https://www.acmicpc.net/problem/15828
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayDeque;
import java.util.Queue;

public class BOJ_S4_15828_Router {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        Queue<Integer> q = new ArrayDeque<>();

        while (true) {
            int packet = Integer.parseInt(br.readLine());

            if(packet == -1) break;

            if(packet == 0) q.poll();
            else if(q.size() < N) q.add(packet);
        }

        if(q.isEmpty()) System.out.println("empty");
        else {
            StringBuilder sb = new StringBuilder();

            while(!q.isEmpty()) {
                sb.append(q.poll()).append(' ');
            }

            sb.setLength(sb.length()-1);
            System.out.println(sb.toString());
        }

    }
}
