package patterns;
import java.util.Scanner;
public class invertedpyramid {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter number of rows/height of pyramid");
        int row = 5;
        for(int i=row;i>=1;i--){
            for(int j = i;j>=1;j--){
                System.out.print("* ");
            }
            System.out.println();
        }
       
    }
    
}
