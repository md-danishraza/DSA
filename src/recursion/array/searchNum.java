package recursion.array;
// linear search using recursion 

public class searchNum {
    static int search(int arr[],int target,int index){
        if(index == arr.length-1){
            // not found
            return -1;
        }
        if(arr[index]==target){
            // found at this index
            return index;
        }else{
            return search(arr, target, index+1);
        }
    }
    public static void main(String[] args) {
        
        int arr[] = {1,2,3,4,4,44};
        System.out.println(search(arr, 55, 0));
    }
}
