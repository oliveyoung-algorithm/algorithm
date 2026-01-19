//https://www.acmicpc.net/problem/15905
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.StringTokenizer;

public class BOJ_S5_15906_스텔라가치킨을선물했어요 {
    static class Student implements Comparable<Student> {
        int score;
        int penalty;

        public Student(int score, int penalty) {
            this.score = score;
            this.penalty = penalty;
        }

        @Override
        public int compareTo(Student o) {
            if(this.score != o.score) {
                return Integer.compare(o.score, this.score);
            }

            return Integer.compare(this.penalty, o.penalty);
        }
    }

    public static void main(String[] args) throws IOException {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

        int N = Integer.parseInt(br.readLine());
        List<Student> students = new ArrayList<>();

        StringTokenizer st;
        for(int i = 0; i < N; i++) {
            st = new StringTokenizer(br.readLine());
            int score = Integer.parseInt(st.nextToken());
            int penalty = Integer.parseInt(st.nextToken());

            students.add(new Student(score, penalty));
        }

        Collections.sort(students);

        int fifthScore = students.get(4).score;
        int ans = 0;

        for(int i = 5; i < N; i++) {
            if(fifthScore != students.get(i).score) break;

            ans++;
        }

        System.out.println(ans);

    }
}
