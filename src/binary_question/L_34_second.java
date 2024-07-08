package binary_question;

public class L_34_second {
    static int first(int[] arr,int target,int start,int end,int answer){

        int mid = start+(end-start)/2;
        if(start>end){
            answer = mid;
            return answer;
        }

        if(arr[mid] == target){
            //potential answer 
            //but search more for first occurrence
            answer = mid;
            return first(arr, target, start, mid-1, answer);
        }
        if(arr[mid]<target){
            //right side 
            return first(arr, target, mid+1, end, answer);
        }else{
            //left side 
            return first(arr, target, start, mid-1, answer);

        }
       
    }
    static int last(int[] arr,int target,int start,int end,int answer){

        int mid = (start+end)/2;
        if(start>end){
            answer = mid;
            return answer;
        }

        if(arr[mid] == target){
            //potential answer 
            //but search more for last occurrence
            answer = mid;
            return last(arr, target, mid+1,end, answer);
        }
        if(arr[mid]<target){
            //right side 
            return last(arr, target, mid+1, end, answer);
        }else{
            //left side 
            return last(arr, target, start, mid-1, answer);

        }
       
    }
    
    
    public static void main(String[] args) {
        int arr[] = {1,2,4,5,5,5,5,7,8};
        int start = 0;
        int end = arr.length-1;
        int target = 5;

        System.out.println(first(arr, target, start, end, -1));
        System.out.println(last(arr, target, start, end, -1));
    }
    
}
