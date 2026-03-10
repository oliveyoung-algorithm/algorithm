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
var invertTree = function (node) {
  const swapValue = (node) => {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  };
  const travTree = (node) => {
    if (!node) {
      return;
    }
    swapValue(node);
    travTree(node.left);
    travTree(node.right);
  };
  travTree(node);
  return node;
};
