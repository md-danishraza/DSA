package _2d_array;

import java.util.Arrays;

// import binary_question.rotation_count;

public class in_sorted_array {
    //search in row between the column provided
    static int[] binary_search(int[][] matrix, int row,int Cstart, int Cend,int target){
        while(Cstart<Cend){
            int mid = Cstart+(Cend-Cstart)/2;

            if(matrix[row][mid]==target){
                return new int[]{row,mid};
            }else if(matrix[row][mid]<target){
                Cstart = mid+1;
            }else{
                Cend = mid-1;
            }
        }

        return new int[]{-1,-1};
    }
    static int[] search(int[][] matrix, int target){
        int rows = matrix.length;
        int col = matrix[0].length;

        if(rows==1){
            return binary_search(matrix, 0, 0, col-1, target);
        }

        int rStart = 0;
        int rEnd = rows-1;
        int cMid = col/2;      //just one time 

        //run while two rows are remaining 
        while(rStart<(rEnd-1)){
            int mid = rStart+(rEnd-rStart)/2;
            //if elemnt = target 
            if(matrix[mid][cMid]==target){
                return new int[]{mid,cMid};
            }else if(matrix[mid][cMid]<target){
                rStart = mid;
            }else{
                rEnd = mid;
            }
        }

        //now we have two rows
        //check if target is in midCol of 2 rows 
        if(matrix[rStart][cMid]==target){
            return new int[]{rStart,cMid};
        }
        if(matrix[rStart+1][cMid]==target){
            return new int[]{rStart+1,cMid};
        }

        //search in first half if
        if(target <= matrix[rStart][cMid-1]){
            //search the first half row from start to mid-1
            return binary_search(matrix, rStart, 0, cMid-1, target);

        }
        //search in second half if 
        if(target >= matrix[rStart][cMid+1] && target<=matrix[rStart][col-1]){
            //search in the second half from cmid+1 to end 
            return binary_search(matrix, rStart, cMid+1, col-1, target);
            
        } 
        //search in third half if
        if(target <= matrix[rStart+1][cMid-1]){
            //search in third half from secondrow to cmid-1
            return binary_search(matrix, rStart+1, 0,cMid-1, target);
            
        }
        //search in fourth half if
        if(target >= matrix[rStart+1][cMid+1] && target<=matrix[rStart+1][col-1]){
            // search in fourth half(second row)from cmid+1 to end

            return binary_search(matrix, rStart+1, cMid+1, col-1, target);
        }

        return new int[]{-1,-1};

    }
    public static void main(String[] args) {
        int matrix[][] = {{1,2,3},
                            {4,5,6},
                            {7,8,9}};

        int[] ans = search(matrix, 5);
        System.out.println(Arrays.toString(ans));
        
    }
}
