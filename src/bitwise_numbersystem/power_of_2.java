package bitwise_numbersystem;

public class power_of_2 {
    static void fn(int n){
        int count = 0;
        while(n>0){
            int lastbit= n&1;
            if(lastbit==1){
                count++;
            }
            n = n>>1;
        }

        // if only one 1 is found then the number is power of two
        if(count==1){
            System.out.println("no. is power of two");
        }else{
            System.out.println("no. is not power of two");
        }
    }
    public static void main(String[] args) {
        fn(7);
    }
}
