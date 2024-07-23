package sorting.cyclic;

import java.util.Arrays;

/**
 * L_268
 */
public class L_268 {
    static int fn(int[] arr,int n){

        int i = 0;
        while(i<n){
            int index = arr[i];
            if(index==n){
                // last value is last element e.g. 4
                // skip 
                i++;
            }else if((index==i)){
                // element at correct index 
                i++;
            }else{
                int temp = arr[index];
                arr[index] = arr[i];
                arr[i] = temp;
            }
        }
        System.out.println(Arrays.toString(arr));
        
        // now array is sorted find the missing 
        // each value is = it its index 
        for(int j=0;j<n;j++){
            if(arr[j]!=j){
                return j;
            }
        }
        // if not found tille n-1 then n is missing
        return n;
    }

    public static void main(String[] args) {
        int[] arr = {4,0,2,1};
        System.out.println(fn(arr, 4));
        

    }
}