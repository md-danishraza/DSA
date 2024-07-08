package binary_question;
import java.util.*;

public class floor_ceil {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int arr[] = {1,3,5,7,10,13};



        int floor = 0;
        int ceil = 0;

        System.out.println(Arrays.toString(arr));
        int start = 0;
        int end = arr.length-1;
        
        System.out.println("enter target: ");
        int target = sc.nextInt();


        while(end>=start){
            int mid = (start+end)/2;
            if(target==arr[mid]){
                //set target index to both 
                floor = mid;
                ceil = mid;
                break;
            }else if(target<arr[mid]){
                //left side 
                //shrink high 
                end = mid-1;
                ceil = mid;
            }else{
                //right side 
                //expand start 
                start = mid+1;
                floor = mid;
            }
        }

        System.out.println("floor is "+arr[floor]);
        System.out.println("ceil is "+arr[ceil]);
    }
}
