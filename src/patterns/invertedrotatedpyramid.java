package patterns;

public class invertedrotatedpyramid {
    public static void main(String[] args) {
        int row = 5;
        //outer loop
        for(int i=1;i<=row;i++){
            //innerloop for space
            for(int j=1;j<=row-i;j++){
                System.out.print(" ");
            }
            //innerloop for star
            for(int j=1;j<=i;j++){
                System.out.print("*");
            }

            System.out.println();
       }
    }
}
