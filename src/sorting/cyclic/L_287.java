package sorting.cyclic;

import java.util.Arrays;

// return the duplicate number in the range [1,n]
// length of array is n+1

public class L_287 {
    static int fn(int arr[]){
        int i = 0;
        while(i<arr.length){
            int index = arr[i]-1;
            // if array
            if(index==i || arr[i]==arr[index]){
                // element is at correct index 
                // move forward
                i++;
            }else{
                // swap 
                int temp = arr[index];
                arr[index] = arr[i];
                arr[i] = temp;
            }
        }
        System.out.println(Arrays.toString(arr));
        // return the duplicate
        for(int j=0;j<arr.length;j++){
            if(arr[j] != j+1){
                return arr[j];
            }
        }


        return -1;
    }
    public static void main(String[] args) {
        int arr[] = {1,3,4,2,2};
        int ans = fn(arr);
        System.out.println(ans);
        
    }
}
