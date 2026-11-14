# 567


# # permutation in a string

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        m = len(s1)
        n = len(s2)
        # s1 can't be greater than s2
        if m > n:
            return False
        
        # maps for freq
        s1_map = {}
        s2_map = {}
        
        # count freq of s1 , substring (only once)
        for char in s1:
            s1_map[char] = s1_map.get(char,0) + 1
        
        # initial start for window 
        # for s2
        for i in range(m):
            s2_map[s2[i]] = s2_map.get(s2[i],0) + 1
            
            
        # check very first windows 
        # direct comparison of dict in python
        if s1_map == s2_map:
            return True
            
        # window size
        left = 0
        right = m 
        
        # go through s2

        while(right < n):
            # add new char on right
            s2_map[s2[right]] = s2_map.get(s2[right],0) + 1
            # increase right
            right += 1
            
            # remove on left
            s2_map[s2[left]] -= 1
            # increase left
            left += 1

            # check for permutation each time
            has_permute = True
            for (char,freq) in s1_map.items():
                if (char not in s2_map) or (s2_map[char]!=freq):
                    has_permute = False
            
            if(has_permute):
                return True

        return False
                    
                    
                    
                
                
                
            
            
sol = Solution()
print(sol.checkInclusion('ab','eidbaooo'))
print(sol.checkInclusion('ab','eidboaoo'))