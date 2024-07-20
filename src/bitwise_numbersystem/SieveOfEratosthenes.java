package bitwise_numbersystem;

public class SieveOfEratosthenes{
    static void fn(int n){
        boolean prime[] = new boolean[n+1];
        for(int i=0;i<=n;i++){
            prime[i] = true;
        }

        // checking till square root of n
        int c = 2;
        while(c*c<=n){
            
            // c is a prime then update all the multiple of it to false
            if(prime[c]==true){
                // starting from next multiple and step of c
                for(int j=c*c;j<=n;j+=c){
                    prime[j] = false;
                }
            }
            c++;
        }

        System.out.println("All prime numbers till "+n);
        for(int i=2;i<=n;i++){
            if(prime[i]==true){
                System.out.print(i+" ");
            }
        }
    }
    public static void main(String[] args) {
        fn(50);
    }
}
