class Solution {
public:
    bool isPalindrome(int x) {
        // 음수 || x 일의 자리가 0일 경우
        if (x < 0 || (x != 0 && x % 10 == 0)) return false;
        
        int reversed = 0;
        while(x > reversed) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }
        
        // 최종 결과
        if (x == reversed || x == reversed / 10) return true;
        else return false;
    }
};
