package binary_question;

public class L_410 {
    static int fn(int[] arr) {
        int end = arr.length-1;
        int min = Integer.MAX_VALUE;
        //continous subarraya = length of array - 1 
        for (int i=1;i<=end;i++){
            //sum left array values
            int left = 0;
            for(int j=0;j<i;j++){
                left += arr[j];
            }
            //sum right array values 
            int right = 0;
            for(int j=i;j<=end;j++){
                right += arr[j];
            }
          
            if(left>right){
                // if left sum is greater then right and less than min 
                if(left<min){
                    min = left;
                }
            }else{
                //if right sum is greater than left and less than min 
                if(right<min){
                    min = right;
                }    
            }
        }
        return min;

    }
    public static void main(String[] args) {
        int num[] = {7,2,5,10,8};
        System.out.println(fn(num));
    }
}
