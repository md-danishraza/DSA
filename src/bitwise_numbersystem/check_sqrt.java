package bitwise_numbersystem;

public class check_sqrt {
    static double fn(int n,int p){
        double root = 0.0;
        int start = 2;
        int end = n;
        while(start<=end){
            int mid = start+(end-start)/2;
            if(mid*mid==n){
                return mid; 
            }
            

            if(mid*mid>n){
                // mid is not sqrt reduce to left
                end=mid-1;
            }else{
                // mid is less than n check right
                start = mid+1;
                root = mid;
            }

 
        }
        double increment = 0.1;
        for(int i=0;i<p;i++){
            while(root*root<=n){
                root += increment;
            }
            // second decimal place
            root = root - increment;
            increment /= 10;
        }
        return root;
    }
    public static void main(String[] args) {
        System.out.println(fn(40,2));
    }
}
