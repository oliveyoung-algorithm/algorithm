/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    for(let i=0, j=s.length-1; i<j; i++, j--){
            while(!isValid(s[i]) && i < j) i++;
            while(!isValid(s[j]) && i < j) j--;
            if(s[i].toLowerCase()!== s[j].toLowerCase()) return false;      
        } 
        return true;

        function isValid(char){
            if(char == null) return false;

            if(char >= "0" && char <= "9") return true;
            if(char >= 'a' && char <='z') return true;
            if(char <= "Z" && char >="A") return true;

            return false;
        }
    
};