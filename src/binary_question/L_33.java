package binary_question;
public class L_33 {
    static int search_rotated(int[] arr,int target,int start,int end){
        int pivot_index = pivot(arr, start, end);

        if(arr[pivot_index]==target){
            return pivot_index;
        }
    
        end = pivot_index-1;
        //search left of pivot 
        int index = binary(arr,target, start, end);
        
        //if not found search right of the pivot 
        if(arr[index] != target){
            //search right of pivot 
            start = pivot_index+1;
            return binary(arr, target, start, end);
        }else{
            return index;
        }
      

    }

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
    static int binary(int[] arr,int target,int start,int end){
        if (arr[end]==target)
            return end;
        if (arr[start]==target)
            return start;
        while(start<end){
            int mid = (start+end)/2;
            if(arr[mid]<target){
                //right side
                start = mid+1;
            }else if(arr[mid]>target){
                //left side
                end = mid-1;
            }else{
                //mid==target
                return mid;
            }  
        }
        return -1;
    }
    
    public static void main(String[] args) {
        int arr[] = {10,12,13,15,1,3,5,8,9};
        // System.out.println(pivot(arr, 0, arr.length-1));
        System.out.println(search_rotated(arr,13,0,arr.length-1));

    }
}
