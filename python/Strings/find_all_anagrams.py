# L - 468

class Solution:
    def findAnagrams(self, s: str, p: str) -> list[int]:
        m, n = len(s), len(p)
        ans = []
        
        # If the pattern is longer than the string, no anagrams can exist
        if n > m:
            return ans
            
        p_map = {}
        s_map = {}
        
        # Initial window setup
        for i in range(n):
            p_map[p[i]] = p_map.get(p[i], 0) + 1
            s_map[s[i]] = s_map.get(s[i], 0) + 1
            
        # Check the first window
        if p_map == s_map:
            ans.append(0)
            
        left = 0
        
        # Slide the window across the rest of the string
        for right in range(n, m):
            # Add the new character entering the window
            s_map[s[right]] = s_map.get(s[right], 0) + 1
            
            # Remove the old character exiting the window
            s_map[s[left]] -= 1
            if s_map[s[left]] == 0:
                del s_map[s[left]] # Clean up for == comparison
                
            left += 1
            
            # If maps match, the start index of this anagram is `left`
            if p_map == s_map:
                ans.append(left)
                
        return ans