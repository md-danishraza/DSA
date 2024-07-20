package bitwise_numbersystem;

public class ith_bit {
    static int fn(int n, int i){

        // shifting the no. to the start 
        n = n >> (i-1);

        n &= 1;
        
        return n;
    }
    public static void main(String[] args) {
        System.out.println(fn(10,4));
    }
}
