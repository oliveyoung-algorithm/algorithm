//https://www.acmicpc.net/problem/2910
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class BOJ_S3_2910_빈도정렬 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());

        int N = Integer.parseInt(st.nextToken());
        int C = Integer.parseInt(st.nextToken());

        Map<Integer, Integer> indexMap = new HashMap<>();
        Map<Integer, Integer> countMap = new HashMap<>();

        st = new StringTokenizer(br.readLine());
        for (int i = 0; i < N; i++) {
            int n = Integer.parseInt(st.nextToken());

            if(!indexMap.containsKey(n)) {
                indexMap.put(n, i);
                countMap.put(n, 0);
            }

            countMap.put(n, countMap.get(n) + 1);
        }

        List<Integer> list = new ArrayList<>(indexMap.keySet());
        Collections.sort(list, (o1, o2) -> {
            if(countMap.get(o1) != countMap.get(o2)) {
                return countMap.get(o2) - countMap.get(o1);
            } else {
                return indexMap.get(o1) - indexMap.get(o2);
            }
        });

        StringBuilder sb = new StringBuilder();

        for (int n : list) {
            for (int i = 0; i < countMap.get(n); i++) {
                sb.append(n).append(' ');
            }
        }

        sb.setLength(sb.length()-1);
        System.out.println(sb.toString());

    }
}
