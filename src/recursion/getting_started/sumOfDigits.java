package recursion.getting_started;

public class sumOfDigits {
    static int fn(int n,int sum){
        if(n==0){
            return sum;
        }
        int remainder = n%10;
        return fn(n/10,sum+remainder);
    }
    static int sum(int n){
        if(n==0){
            return n;
        }
        return n%10+sum(n/10);
    }

    public static void main(String[] args) {
        // System.out.println(fn(4444, 0));
        System.out.println(sum(55));
    }
}
