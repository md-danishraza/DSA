package recursion.getting_started;

public class countZeroes{
    static int fn(int n, int temp){
        if(n==0){
            return temp;
        }
        int remainder = n%10;
        if(remainder==0){
            temp+= 1;
        }
        return fn(n/10, temp);
    }
    public static void main(String[] args) {
        System.out.println(fn(2002,0));
    }
}