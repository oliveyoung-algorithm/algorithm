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
var maxDepth = function (root) {
  let depth = 0;
  const findDepth = (node, depth) => {
    if (!node || node.val === null) {
      return depth;
    }
    return Math.max(
      findDepth(node.right, depth + 1),
      findDepth(node.left, depth + 1)
    );
  };
  return findDepth(root, depth);
};
