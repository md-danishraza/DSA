package sorting.cyclic;

import java.util.Arrays;

public class cyclic {
    static int[] fn(int[] arr,int start){

        int i = 0;
        while(i<arr.length){
            int index = arr[i]-start;
            if(index==i){
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

        return arr;
    }
    public static void main(String[] args) {
        int arr[] = {13,10,11,14,12};
        int[] ans = fn(arr, 10);
        
        System.out.println(Arrays.toString(ans));
    }
}
