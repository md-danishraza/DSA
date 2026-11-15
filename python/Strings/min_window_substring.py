# l - 76

"""
Given two strings s and t of lengths m and n respectively, return
the minimum window substring of s such that every character in 
t (including duplicates) is included in the window. If there is 
no such substring, return the empty string "".
The testcases will be generated such that the answer is unique.

Example 1:

Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"
Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
"""

class Solution:
    def minWindow(self, s: str, t: str) -> str:
        if(t==''): return ''
        # window will dynamic
        countT,window = {},{}
        # count T is fixed count
        for c in t:
            countT[c] = countT.get(c,0) + 1
        # have starts with zero
        # need is no. of unique chars in T
        have,need = 0,len(countT)
        
        # res = [start subs, end of subs]
        # resLength = infinity
        res,resLen = [-1,-1],float('infinity')
        # left pointer
        l = 0
        for r in range(len(s)):
            # get char
            c = s[r]
            # add to window
            window[c] = window.get(c,0) + 1
            
            # if c is needed char 
            # and freq count is exact equal (in window)
            if c in countT and window[c]==countT[c]:
                # satsified a needed char condition
                # increment have by one
                have += 1
            # while current windows contains needed chars   
            while have == need:
                # update the result (substring pointer)
                if(r-l+1)<resLen:
                    res = [l,r]
                    resLen = r-l+1
                # pop from left 
                window[s[l]] -= 1
                # if popping dissatisfy countT
                # decrease have 
                if s[l] in countT and window[s[l]]<countT[s[l]]:
                    have -= 1
                # increment left pointer
                l += 1
                
        l,r = res
        return s[l:r+1] if resLen != float('infinity') else ""
                
                
                
                
sol = Solution()

print(sol.minWindow("ADOBECODEBANC","ABC"))
