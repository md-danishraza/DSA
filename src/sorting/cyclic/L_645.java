package sorting.cyclic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

// find mismatch

public class L_645 {
    static List<Integer> fn(int arr[],int start){
        int i = 0;
        while(i<arr.length){
            int index = arr[i]-start;
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
        List<Integer> ans = new ArrayList<>();
        System.out.println(Arrays.toString(arr));

        // now array is sorted 
        for(int j=0;j<arr.length;j++){
            if(arr[j] != j+1){
                // if value != index+1 then its the missing index 
                // return  the missing and repeted number 
                ans.add(arr[j]);   //repeated
                ans.add(j+1);       //missing 
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        int arr[] = {2,1,4,2,6,5};
        List<Integer> ans = fn(arr);
        System.out.println(ans.toString());

    }
}
