/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const bkArr=[]
    const ans =[]
    const bk = (k) =>{
        if(k === s.length){
            if(bkArr.join('') === s){
                ans.push(bkArr.join(' '))
                return;
            }else{
                return;
            }
        }
        for(let i = 0 ; i < wordDict.length; i++){
            if(k + wordDict[i].length <= s.length  && s.startsWith( wordDict[i] ,k)){
                bkArr.push(wordDict[i])
                bk(k+wordDict[i].length)
                bkArr.pop()
            }
        }
    }
    bk(0)
    return ans
};

/**
 * 브루트포스 문제, 모든 가능성을 다 확인해야한다.
 * 다양한 브루트포스 실행 방법이 있지만, 백트래킹, 다른말로 dfs로 문제를 풀 수있다.
 * 다른 방법도 여럿 생각해봤는데, 이거 말고 해법이 없어 보였다.
 * 대신 여타 다른 백트래킹, 브루트포스 문제처럼 return문이 굉장히 중요했다. return문 생각안하고 모든 가능성을 다 확인했을 때는
 * 당연히 시간복잡도가 계속 터졋다
 * 
 * 재귀에 들어가는 조건 + 재귀 리턴 조건 두가지를 신경써야했고, 재귀 리턴 조건만 사용했을 때는 시간 복잡도가 터졌다
 * 
 * 재귀 들어가는 조건에서 새로 알게된 method는 startsWith 메소드를 새로 알게됨.
 * s.startsWith(word, i) : s의 i번째 인덱스부터 확인했을 때, word로 시작되는지 확인하는 메소드이다. 
 * 
 * 문제의 시간복잡도는: 가지치기 가능 경우의수 : n, 트리의 깊이: n,
 *  -> 결론은 O(n^n)
 * 공간 복잡도: 트리의 깊이 O(n): bkArr의 최악의 크기가 n임
 * 
 * 공간복잡도 잘 모르는데, 트리의 깊이로 해야하는건지 배열의 최악의 크기로 해야하는지 잘 모르겟음
 */

