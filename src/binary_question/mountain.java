package binary_question;
//find the largest num in sorted array in which 
//first half ascending and second is descending
//duplicate element is not allowed  

public class mountain {
    static int bruteforce(int[] arr){
        int index = 0;

        while(arr[index]<arr[index+1]){
            index++;
        }

        return index;

    }
    static int fn(int[] arr,int start,int end){
        int mid = start+(end-start)/2;
        
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            //found the peak 
            return mid;
        }else if(arr[mid-1]<arr[mid] && arr[mid]<arr[mid+1]){
            //in ascending half 
            //search next 
            return fn(arr, mid+1,end);
        }else{
            // in descending half
            // search previous
            return fn(arr, start, mid-1);
        }
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,10,15,4,3,2,1};
        System.out.println(bruteforce(arr));
        System.out.println(fn(arr, 0, arr.length-1));
        
    }
}
