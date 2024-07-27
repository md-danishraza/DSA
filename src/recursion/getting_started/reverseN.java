package recursion.getting_started;

public class reverseN {
    static int reversed = 0 ;
    static void fn(int n){
        if(n==0){
            return;
        }
        // get is last digit
        int lastDigit = n%10;
        // update it to the static variable at each recursion
        reversed = reversed*10 + lastDigit;
        fn(n/10);
    }
    
   
    public static void main(String[] args) {
        fn(1234);
        System.out.println(reversed);
        
    }
}
