package sorting;

import java.util.Arrays;

public class bubble_sort {
    static int[] fn(int[] arr){

        int end = arr.length-1;


        for(int i=0;i<end;i++){
            boolean asc = false;
            for(int j=0;j<(end-i);j++){
                if(arr[j]>arr[j+1]){
                    arr[j+1] = arr[j];
                }else{
                    asc = true;
                }
            }
            //if inner loop is already sorted than no need to check further
            if (asc==true)
                break;
        }

        return arr;
    }
    public static void main(String[] args) {
        int[] arr = {1,3,2,6,7,10,20,25,12};

        int[] ans = fn(arr);
        System.out.println(Arrays.toString(ans));


    }
}
