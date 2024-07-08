package _2d_array;


import java.util.Arrays;
//sorted row and column wise manner

class binary_search{
    static int[] search(int[][] arr, int target){

        int row = 0;
        int n = arr[0].length;
        int col = n -1;

        while(row<=n && col>=0){
            if(arr[row][col]==target){
                return new int[]{row,col};
            }
            if(arr[row][col]<target){
                row++;
            }else{
                col--;
            }

        }

        return new int[]{-1,-1};

    }
    public static void main(String[] args) {
        int[][] arr = {{5,6,8,12},{7,10,12,15},{8,12,14,16,},{10,13,16,20}};
  

        int[] ans = search(arr, 14);
        
        System.out.println(Arrays.toString(ans));


    }
}
