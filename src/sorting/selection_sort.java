package sorting;
import java.util.Arrays;

public class selection_sort {
    static int[] fn(int[] arr){
        int end = arr.length-1;


        for(int i=0;i<end;i++){
            // iterating it N times 
            int max = 0;
            for(int j=0;j<end-i;j++){
                // find max in remaining array 
                if(arr[j]<arr[j+1]){
                    max = arr[j+1];
                }
            }
            // set to last index of remaining array 
            arr[end-i] = max;
        }

        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {1,3,2,6,7,10,20,25,12};

        int[] ans = fn(arr);
        System.out.println(Arrays.toString(ans));
        
    }
}
