package bitwise_numbersystem;

public class find_unique {
    static int unique(int arr[]){

        int ans = 0;
        for(int n:arr){
            ans ^= n;
        }

        return ans;
    }
    public static void main(String[] args) {
        int[] arr = {1,2,3,4,3,2,1};   //4 is unique
        System.out.println(unique(arr));
    }
}
