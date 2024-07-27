package recursion.getting_started;

public class fib {
    static void fn(int a,int b, int n){
        if(n==0){
            return;
        }

        System.out.print(a+" ");
        fn(b, a+b, n-1);
    }
    public static void main(String[] args) {
        fn(0, 1, 10);
    }
}
