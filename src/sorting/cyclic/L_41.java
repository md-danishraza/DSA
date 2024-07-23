package sorting.cyclic;

import java.util.Arrays;

public class L_41 {
    static void swap(int[] arr, int i, int j) {
        int temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    
    static int fn(int[] arr,int start){

        // int i = 0;
        int n = arr.length;
         // Place each positive integer i at index i-1 if possible
         for (int i = 0; i < n; i++) {
            // no. is +ve and < n and is not at correct index
            // then swap else ignore ++
            while (arr[i] > 0 && arr[i] <= n && arr[i] != arr[arr[i] - 1]) {
                swap(arr, i, arr[i] - 1);
            }
        }

        System.out.println(Arrays.toString(arr));
        //now array is sorted
        // if one is missing return smallest +ve
        if(arr[0]!=1){
            return 1;
        }
        // if not then search next missing no. and skip the negatives
        for(int j=0;j<arr.length;j++){
            if(arr[j]>0){
                if(arr[j]!=j+1){
                    return j+1;
                }
            }
        }

        return arr[n-1]+1;
    }
    public static void main(String[] args) {
        int arr[] = {7,8,9,11,12};
        int ans = fn(arr, -1);
        System.out.println(ans);
      
    }
}
