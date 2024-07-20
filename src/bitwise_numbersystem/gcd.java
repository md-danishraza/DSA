package bitwise_numbersystem;

public class gcd {
    // HIGHEST COMMON FACTOR
    static int gcd(int a, int b){
        if(a == 0){
            return b;
        }else{
            return gcd(b%a, a);
        }
    }
    // MINIMUM NO. DIVISIBLE BY THE BOTH 
    static int lcm( int a, int b){
        return a*b/gcd(a,b);
    }
    public static void main(String[] args) {
        System.out.println(gcd(50, 120));
        System.out.println(lcm(50, 100));
    }
}
