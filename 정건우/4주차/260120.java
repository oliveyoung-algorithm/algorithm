//https://www.acmicpc.net/problem/23056
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class BOJ_S4_23056_참가자명단 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int M = Integer.parseInt(st.nextToken());

        List<ArrayList<String>> list = new ArrayList<>();
        for (int i = 0; i < N; i++) {
            list.add(new ArrayList<>());
        }

        while(true) {
            st = new StringTokenizer(br.readLine());

            int classNum = Integer.parseInt(st.nextToken());
            String name = st.nextToken();

            if(classNum == 0 && name.equals("0")) break;

            if(list.get(classNum-1).size() == M) continue;

            list.get(classNum-1).add(name);
        }

        for (int i = 0; i < N; i++) {
            Collections.sort(list.get(i), (o1, o2) -> {
                String s1 = (String) o1;
                String s2 = (String) o2;

                if(s1.length() != s2.length()) return Integer.compare(s1.length(), s2.length());

                return s1.compareTo(s2);
            });
        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < N; i+= 2) {
            for (int j = 0; j < Math.min(list.get(i).size(), M); j++) {
                sb.append((i + 1)).append(" ").append(list.get(i).get(j)).append("\n");
            }
        }

        for (int i = 1; i < N; i+= 2) {
            for (int j = 0; j < Math.min(list.get(i).size(), M); j++) {
                sb.append((i + 1)).append(" ").append(list.get(i).get(j)).append("\n");
            }
        }

        System.out.println(sb);

    }
}
