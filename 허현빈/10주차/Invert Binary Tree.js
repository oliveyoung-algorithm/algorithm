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
  const swapChildren = (node) => {
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
  };

  const traverseTree = (node) => {
    if (!node) return;

    swapChildren(node);
    traverseTree(node.left);
    traverseTree(node.right);
  };

  traverseTree(root);
  return root;
};