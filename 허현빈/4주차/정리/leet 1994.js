/**
 * @param {number[]} heights
 * @return {number[]}
 */
var canSeePersonsCount = function(heights) {
    const stack = [];
    const ans =[ ]
    for(let i = heights.length-1; i >= 0 ; i--){
            let count = 0

        if(stack.length){
            for(let j = stack.length-1; j>=0; j--){
                if(stack[j] >= heights[i]){
                    count++
                    break;
                }else{
                    count++
                    stack.pop()
                }
            }
        }
        ans.push(count)
        stack.push(heights[i])
    }
    return ans.reverse()
};

/**
 * - monotonic stack 대표 문제
 * - 7,6,5가 있을 때, 7은 6뒤의 5를 볼 수 있는지 없는지를 가지고 헷갈리게하는 문제가 많음
 * - 시간 복잡도: O(n), 2중 for문이라서 O(n2)으로 볼 수 있지만, 각 요소는 최대 1번씩 push/pop 되므로 O(n)이다.
 * - 공간 복잡도: O(n) 해당 문제에서 생성하는 배열은 2개 각각 ans, stack. 둘다 최대 n개의 원소만을 넣을 수 있음
 */