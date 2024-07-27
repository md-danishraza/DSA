package recursion.getting_started;

public class sumOfN {
    static int fn(int n,int sum){
        if(n==0){
            return sum;
        }
        return fn(n-1,sum+n);
    }
    public static void main(String[] args) {
        System.out.println(fn(5, 0));
    }
}
