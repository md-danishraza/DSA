package patterns;
public class butterfly {
    public static void main(String[] args) {
        int row = 4;  //half row number
        //upper half
        for(int i=1;i<=row;i++){
            for(int j=1;j<=i;j++){ 
                System.out.print("* ");
            }
            for(int j=1;j<=2*(row-i);j++){   //spaces (2*(n-1))=6,4,2,0
                System.out.print("  ");
            }
            for(int j=1;j<=i;j++){ 
                System.out.print("* ");
            }
            System.out.println();
        }
        // lower half
        for(int i=1;i<=row;i++){
            for(int j=row;j>=i;j--){ 
                System.out.print("* ");
            }
            for(int j=2*(i-1);j>=1;j--){   //spaces = 0,2,4,6
                System.out.print("  ");
            }
            for(int j=row;j>=i;j--){ 
                System.out.print("* ");
            }
            System.out.println();
        }
    }
}
