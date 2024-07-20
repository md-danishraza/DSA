package bitwise_numbersystem;

public class magic_no {
    static int fn(int n){

        int ans = 0;
        int base = 5;

        while(n>0){
            
            int lastbit = n&1;
            // if bit is zero then 0 will be added hence no effect
            // if bit is one then 5*base added
            ans += lastbit*base;


            // rightshift and increase the base in each iteration
            base *= 5;
            n = n>>1;
        }

        return ans;
    }
    public static void main(String[] args) {
        System.out.println(fn(3));
    }
}
