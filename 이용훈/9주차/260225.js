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
var sumRootToLeaf = function(root) {
    let sum = 0;

    const dfs = (node, cur) => {
        if (!node) return;

        cur = (cur << 1) | node.val;

        if (!node.left && !node.right) {
        sum += cur;
        return;
        }

        dfs(node.left, cur);
        dfs(node.right, cur);
    };

    dfs(root, 0);
    return sum;
};