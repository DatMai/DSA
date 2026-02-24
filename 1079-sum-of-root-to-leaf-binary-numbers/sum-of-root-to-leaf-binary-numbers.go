// Version 2
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func sumRootToLeaf(root *TreeNode) int {
	var dfs func(*TreeNode, uint32) uint32
	dfs = func(node *TreeNode, val uint32) uint32 {
		if node == nil { return 0 }
		val = val<<1 | uint32(node.Val)
        sum := dfs(node.Left, val) + dfs(node.Right, val)
        return val * ((sum - 1) >> 31) | sum
	}
	return int(dfs(root, 0))
}