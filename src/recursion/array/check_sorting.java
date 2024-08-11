package recursion.array;
// linear search using recursion
import java.util.Arrays;

public class check_sorting {
    static boolean fn(int[] arr,int index){
        if(index == arr.length-1){
            return true; 
        }

        if(arr[index]<arr[index+1]){
    
            return fn(arr,index+1);
        }else{
    
            return false;
        }
    }
    static boolean method2(int arr[],int index){
        if(index == arr.length-1){
            return true; 
        }

        return arr[index]<arr[index+1] && method2(arr, index+1);
    }
    public static void main(String[] args) {
        int arr[] = {1,2,4};
        System.out.println(fn(arr, 0));
        System.out.println(method2(arr, 0));
    }
}
