class Solution {
    public boolean[] pathExistenceQueries(int n, int[] nums, int maxDiff, int[][] queries) {
        // Group ID tracker for each index
        int[] groupId = new int[n];
        int currentId = 0;
        
        // Linear scan to partition elements into connected components
        for (int i = 1; i < n; i++) {
            if (nums[i] - nums[i - 1] > maxDiff) {
                currentId++; // A gap greater than maxDiff creates a new component
            }
            groupId[i] = currentId;
        }
        
        // Process queries in O(1) time each
        int m = queries.length;
        boolean[] answer = new boolean[m];
        for (int i = 0; i < m; i++) {
            int u = queries[i][0];
            int v = queries[i][1];
            answer[i] = (groupId[u] == groupId[v]);
        }
        
        return answer;
    }
}