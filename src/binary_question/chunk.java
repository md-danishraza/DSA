package binary_question;

/*It looks like you are implementing a search function to find a target 
number in a sorted array using a chunk size approach, where you double the
 search range if the target is not found within the current range */
public class chunk {
    static int fn(int[] arr,int target,int start,int end){
        
        if((arr[start]<target) && (arr[end]>target)){
            // apply binary 
            if (arr[end]==target)  //edge cases 
            return end;
            if (arr[start]==target)
            return end;
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
            //if not found
            return -1;
        }else{
            return fn(arr, target, end+1, end*2);
        }
    

    
    }
    public static void main(String[] args) {
        // int[] arr = {1,2,3,4,5,6,7,8,9,10,11,12,13};
        // System.out.println(fn(arr, 11, 1-1, 1));

        int[] arr2 = new int[500];

        for(int i=0;i<500;i++){
            arr2[i] = i;
        }

        System.out.println(fn(arr2, 50, 0, 1));


    }
}
