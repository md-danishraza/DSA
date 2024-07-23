package sorting;

import java.util.Arrays;

public class insertion_sort {
    static int[] fn(int[] arr){

        int end = arr.length-1;
        
        for(int i=0;i<end;i++){
            // outer loop for n times
            System.out.println(Arrays.toString(arr));
            for(int j=i;j>=0;j--){
                //swap till next element is greater than previous in LHS array
                if(arr[j+1]<arr[j]){
                    int temp = arr[j];
                    arr[j] = arr[j+1];
                    arr[j+1] = temp;
                }else{
                    //element is greater no need to swap it to already sorted LHS array
                    //break the inner loop  
                    break;
                }

            }
        }
        
        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {1,3,2,6,7,12,8,50,34,30};

        int[] ans = fn(arr);
        System.out.println(Arrays.toString(ans));
        
    }
}
