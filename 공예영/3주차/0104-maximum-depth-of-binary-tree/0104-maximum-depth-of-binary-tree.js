/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {

    return dfs(root,1)

    function dfs(node, cnt){
        if(!node) return 0;
        
        let left, right;
        if(node.left) left = dfs(node.left,cnt+1);
        if(node.right) right = dfs(node.right,cnt+1);
        if(node.left == null && node.right == null) {
            return cnt;
        }
        return Math.max(left ?? 0,right ?? 0);
    }
    
};