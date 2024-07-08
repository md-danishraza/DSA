package binary_question;

import java.util.ArrayList;
import java.util.Arrays;

public class L_34 {
    static int first(int[] arr,int target,int start,int end){
        int firstocc = -1;
        while(start<=end){
            int mid = (start+end)/2;
            if(arr[mid]>target){
                //left side
                end = mid-1;
            }else if(arr[mid]<target){
                //right side
                start = mid+1;
            }else{
                firstocc = mid;
                end = mid-1;
            }
        }

        return firstocc;
    }

    static int last(int[] arr,int target,int start,int end){
        int lasttocc = -1;
        while(start<=end){
            int mid = (start+end)/2;
            if(arr[mid]>target){
                //left side
                end = mid-1;
            }else if(arr[mid]<target){
                //right side
                start = mid+1;
            }else{
                lasttocc = mid;
                start = mid+1;
            }
        }

        return lasttocc;
    }

    static int[] fn(int[] arr,int target,int start,int end){
        int first = first(arr, target, start, end);
        int last = last(arr, target, start, end);

        return new int[]{first,last};
    }
    
    public static void main(String[] args) {
        int arr[] = {1,2,4,5,5,5,5,7,8};
        int start = 0;
        int end = arr.length-1;
        int target = 5;

        int[] ans = fn(arr, target, start, end);
        System.out.println(Arrays.toString(ans));

    }
}
