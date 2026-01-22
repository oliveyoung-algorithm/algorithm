//https://www.acmicpc.net/problem/11507
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class BOJ_S4_11507_카드셋트 {
    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        String str = br.readLine();

        List<Set> list = new ArrayList<Set>();
        for (int i = 0; i < 4; i++) {
            list.add(new HashSet<String>());
        }

        Map<Character, Integer> idxMap = new HashMap<>();
        idxMap.put('P', 0); idxMap.put('K', 1); idxMap.put('H', 2); idxMap.put('T', 3);

        for (int i = 0; i < str.length(); i += 3) {
            char mark = str.charAt(i);
            int idx = idxMap.get(mark);

            String number = str.substring(i+1, i+3);

            if(list.get(idx).contains(number)) {
                System.out.println("GRESKA");
                return;
            }

            list.get(idx).add(number);

        }

        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < 4; i++) {
            sb.append(13-list.get(i).size()).append(" ");
        }

        sb.setLength(sb.length()-1);
        System.out.println(sb);
    }
}
