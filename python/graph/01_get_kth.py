from functools import cache


def get_kth(lo: int, hi: int, k: int) -> int:
    @cache
    def get_power(x: int) -> int:
        if x == 1:
            return 0
        if x % 2 == 0:
            return 1 + get_power(x // 2)
        else:
            return 1 + get_power(3 * x + 1)
            
    # Create list of tuples (number, power)
    powers = [(i, get_power(i)) for i in range(lo, hi + 1)]
    
    # Sort by power first (x[1]), then by number (x[0])
    powers.sort(key=lambda x: (x[1], x[0]))
    
    return powers[k - 1][0]