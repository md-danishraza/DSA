package binary_question;
public class rotation_count {
    static int pivot(int[] arr,int start,int end){
        //this will find the peak element index
        int mid = start+(end-start)/2;
        
        if (mid==0){
            //edge case for last size of 2 in which end elemnt not get detected 
            //by mid in case of even size
            return end;
        }
        
        if(arr[mid-1]<arr[mid] && arr[mid]>arr[mid+1]){
            //found the peak 
            return mid;
        }else if(arr[mid-1]<arr[mid] && arr[mid]<arr[mid+1]){
            //in ascending half 
            //search next 
            return pivot(arr, mid+1,end);
        }else{
            // in descending half
            // search previous
            return pivot(arr, start, mid-1);
        }
    }
    public static void main(String[] args) {
        int num[] = {15,16,17,18,2,3,6,12};
    

        int rotation = pivot(num, 0, num.length-1)+1;
        System.out.println(rotation);

    }
}
