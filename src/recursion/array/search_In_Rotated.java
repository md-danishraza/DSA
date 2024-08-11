package recursion.array;

public class search_In_Rotated {
    static int fn(int arr[],int key,int s,int e){
        if(s>e){
            return -1;
        }

        int m = s +(e-s)/2;

        if(arr[m] == key){
            return m;
        }

        // only if left half is sorted
        if(arr[s] <= arr[m]){
            if(arr[s] <= key && key <= arr[m]){
                // if key is in the left half then search
                return fn(arr, key, s, m-1);
            }else{
                // else search in right half;
                return fn(arr, key, m+1, e);
            }

            // [5,6,1,2,3,4] m=1
        }else if(key >= arr[m] && key<=arr[e]){
            // key is present in right 
            return fn(arr, key, m+1, e);
        }else{
            return fn(arr, key, s, m-1);
        }
    }
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5,10,9,8,7};
        System.out.println(fn(arr, 10, 0, arr.length-1));

    }
}
