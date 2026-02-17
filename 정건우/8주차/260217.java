//https://www.acmicpc.net/problem/26768
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

public class BOJ_B4_26768_H4x0r {
    public static void main(String[] args) {
        Scanner scann = new Scanner(System.in);
        StringBuilder sb = new StringBuilder();

        String str = scann.nextLine();
        Map<Character, Character> charMap = new HashMap<>();
        charMap.put('a', '4'); charMap.put('e', '3'); charMap.put('i', '1'); charMap.put('o', '0'); charMap.put('s', '5');

        for (int i = 0; i < str.length(); i++) {
            char c = str.charAt(i);

            if (charMap.containsKey(c)) {
                sb.append(charMap.get(c));
            } else {
                sb.append(c);
            }
        }

        System.out.println(sb.toString());

    }
}
