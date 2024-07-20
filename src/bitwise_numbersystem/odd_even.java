package bitwise_numbersystem;

public class odd_even {
    static void fn(int n){

        if((n & 1) == 1){
            System.out.println("n is odd");
        }else{
            System.out.println("n is even");
        }
    }
    public static void main(String[] args) {
        fn(10);
    }
}
