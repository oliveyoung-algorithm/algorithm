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
 * @return {TreeNode}
 */
var invertTree = function(root) {
        if(!root) return null;

        const queue = [root];
        let left, right;

        while(queue.length > 0){
            const current = queue.pop();
            left = current.left;
            right = current.right;
            current.left = right;
            current.right = left;
            if(left) queue.push(left);
            if(right) queue.push(right);
        }
        return root;
};
