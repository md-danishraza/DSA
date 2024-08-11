package recursion.pattern;

import java.util.Arrays;

public class bubbleSort {
    static void bsort(int arr[],int row, int col){
        if(row == 0){
            // base case
            return;
        }

        if(col<row){
            // comparing adjacent no. till row 
            // because after row no. is already sorted 
            if(arr[col]>arr[col+1]){
                // if preceding>succeeding
                int temp = arr[col+1];
                arr[col+1] = arr[col];
                arr[col]=temp;
            }
            // going forward 
            bsort(arr, row, col+1);
        }else{
            // move to next iteration 
            bsort(arr, row-1, 0);
        }
    }
    public static void main(String[] args) {
        int arr[] = {4,3,2,1};
        bsort(arr , arr.length-1, 0);
        System.out.println(Arrays.toString(arr));
    }
}
