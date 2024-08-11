package recursion.pattern;

public class q {
    static void inverseRightTriangle1(int rows){
        if(rows == 0){
            return;
        }
        for(int i=0 ; i<rows ;i++){
            System.out.print("* ");
        }
        System.out.println();
        inverseRightTriangle1(rows-1);
    }
    static void inverseRightTriangle2(int rows, int col){
        if(rows == 0){
            return;
        }

        if (col<rows) {
            // fill the rows
            System.out.print("* ");
            inverseRightTriangle2(rows,col+1);
        }else{
            // go to next row and reset col to 0
            System.out.println();
            inverseRightTriangle2(rows-1, 0);
        }
    }
    static void RightTriangle(int rows, int col){
        if(rows == 0){
            return;
        }
        
        if (col<rows) {
            // fill the rows
            RightTriangle(rows,col+1);
            
            // print while returning back 
            System.out.print("* ");
        }else{
            // go to next row and reset col to 0
            RightTriangle(rows-1, 0);
            // print while returning back 
            System.out.println();
        }
    }
    public static void main(String[] args) {
        // inverseRightTriangle1(5);
        // inverseRightTriangle2(5 , 0);
        RightTriangle(3, 0);
    }
}
