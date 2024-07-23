package sorting.cyclic;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class L_442 {
    static List<Integer> fn(int arr[]){
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
        List<Integer> ans = new ArrayList<>();
        System.out.println(Arrays.toString(arr));

        // now array is sorted 
        for(int j=0;j<arr.length;j++){
            if(arr[j] != j+1){
                // if value != index+1 then its the missing index 
                // return  the value of index+1
                ans.add(arr[j]);
            }
        }
        return ans;
    }
    public static void main(String[] args) {
        int arr[] = {4,3,2,7,8,2,3,1};
        List<Integer> ans = fn(arr);
        System.out.println(ans.toString());

    }
}
