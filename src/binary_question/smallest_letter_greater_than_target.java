package binary_question;

public class smallest_letter_greater_than_target {
    static char fn(char[] arr,char target,int start,int end){
        int mid = start+(end-start)/2;
        if(target<arr[start]){
            return arr[start];
        }
        if(target>arr[end]){
            //letters wrap around 
            //if no element is largest than target = not available 
            //return first element 
            return arr[0];
        }

        while(end>=start){
            if(arr[mid]==target){
                if(mid==end){
                    //letters wrap around 
                     //if no element is largest than target = not available 
                   //return first element
                    return arr[0];
                }else{
                    
                    return arr[mid+1];
                }
            }else if(arr[mid]>target){
                //left side 
                //if mid==start==end means target is less than than arr[mid]
                if((mid<=end) && (arr[mid]>target)){
                    return arr[mid];
                }else{
                    return fn(arr, target, start, mid-1);
                }
            }else{
                //right side
                if((mid<=end) && (arr[mid]>target)){
                    return arr[mid+1];
                }else{
                    return fn(arr,target,mid+1,end);
                }
            }
        }
        //if not found 
        return '!';
    }
    public static void main(String[] args) {
        char[] arr = {'b','d','g','l'};
        int start = 0;
        int end = arr.length-1;

        char target = 'm';


        System.out.println(fn(arr, target, start, end));
        
    }
}
