package bitwise_numbersystem;

public class righmost_bit {
    static int fn(int n){

        int ans = 0;
        int m = 0;
        while(m!=1){
            m = n & 1;
            n = n>>1;
            ans++;
        }

        return ans;
    }
    public static void main(String[] args) {
        System.out.println(fn(1));
    }
}
