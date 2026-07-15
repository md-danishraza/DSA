from collections import defaultdict
from typing import List

# ==========================================
# Approach 1: Brute Force / Naive Window (N^2)
# Time Complexity: O(N^2)
# Space Complexity: O(1)
# ==========================================
def subarray_sum_naive(nums, k):
    count = 0
    n = len(nums)
    
    for i in range(n):
        temp = 0
        for j in range(i, n):
            temp += nums[j]
            
            if temp == k:
                count += 1
                
    return count


# ==========================================
# Approach 2: Optimized Prefix Sum Map (Linear)
# Time Complexity: O(N)
# Space Complexity: O(N)
# ==========================================
def subarray_sum_optimized(nums, k):
    count = 0
    current_sum = 0
    
    # defaultdict automatically initializes missing keys with 0,
    # cleanly replacing JavaScript's Map.has() and Map.get() || 0 logic.
    prefix_map = defaultdict(int)
    
    # Base case: A prefix sum of 0 has occurred 1 time
    prefix_map[0] = 1
    
    for num in nums:
        current_sum += num
        
        # If (current_sum - k) exists in our past tracker, 
        # it will add its frequency count. If not, it safely adds 0.
        count += prefix_map[current_sum - k]
        
        # Increment the frequency of the current prefix sum
        prefix_map[current_sum] += 1
        
    return count


# --- Verification ---
print("Naive O(N^2) Results:")
print(subarray_sum_naive([1, 1, 1], 2))  # Output: 2
print(subarray_sum_naive([1, 2, 3], 3))  # Output: 2

print("\nOptimized O(N) Results:")
print(subarray_sum_optimized([1, 1, 1], 2))  # Output: 2
print(subarray_sum_optimized([1, 2, 3], 3))  # Output: 2