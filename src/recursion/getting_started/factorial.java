package recursion.getting_started;

public class factorial {
    static int fn(int n){
        if(n<=2){
            return n;
        }
        return n*fn(n-1);
    }
    public static void main(String[] args) {
        System.out.println(fn(5));
    }
}
