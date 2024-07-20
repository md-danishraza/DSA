package bitwise_numbersystem;

public class check_prime {
    static boolean fn(int n){

        if(n<2){
            return false;
        }
        int c = 2;
        // checking till square root of n 
        // cause after that number is repeated
        while(c*c<=n){
            // if multiple is found
            if(n%c==0){
                return false;
            }
            c++;
        }
        // if multiple is not found return true
        return true;

    }
    public static void main(String[] args) {
        System.out.println(fn(10));
    }
}
