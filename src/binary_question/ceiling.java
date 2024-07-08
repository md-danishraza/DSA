package binary_question;

//find element => target 
/*
For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 0:    floor doesn't exist in array,  ceil  = 1
For x = 1:    floor  = 1,  ceil  = 1
For x = 5:    floor  = 2,  ceil  = 8
For x = 20:   floor  = 19,  ceil doesn't exist in array */
public class ceiling {
    static int ceil(int[] arr,int target,int low,int high){
        int mid = (low+high)/2;

        
        //edge cases
        if (arr[low]>target){
            return arr[low];
        }

        if (arr[high]<target){
            //no ceil for target greater than the max element 
            return -1;
        }


        //binary cases 
        if (arr[mid]==target){
            return target;

        }else if(arr[mid]<target){
            //right side 
            
            if((arr[mid+1]>target) && (mid+1==high)){
                return arr[mid+1];
            }else{
                return ceil(arr,target,mid+1,high);
            }
        }else{
            //left side 
            if((arr[mid+1]>target) && (mid+1==high)){
                return arr[mid+1];
            }else{
                return ceil(arr,target,low,mid-1);
            }
        } 
    }
    public static void main(String[] args) {
        int[] arr = {1,3,5,7,10};
        int low = 0;
        int high = arr.length-1;

        System.out.println(ceil(arr, 8, low, high));
        
        
    }
}
