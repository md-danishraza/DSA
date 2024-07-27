package recursion.getting_started;

public class q1 {
    static int fn(int n){
        if (n==0){
            return n;
        }else{
            System.out.print(n+" ");
            return fn(n-1);
        }
    }
    static void fn2(int n){
        if (n==0){
            return;
        }
        fn2(n-1);
        // this code will excute when recursion end
        // and will follow lifo 
        System.out.print(n+" ");
    }
    static void fn3(int n){
        if (n==0){
            return;
        }
        System.out.print(n+" ");
        fn3(n-1);
        // this code will excute when recursion end
        // and will follow lifo 
        System.out.print(n+" ");
    }
    public static void main(String[] args) {
        fn3(10);
    }
}
