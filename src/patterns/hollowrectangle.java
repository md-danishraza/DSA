package patterns;

import java.util.Scanner;
public class hollowrectangle {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        //int rows = sc.nextInt();
        int rows= sc.nextInt();
        int columns = sc.nextInt();
        for(int i=1;i<=rows;i++){
            for(int j=1;j<=columns;j++){
                if (j==1 || i==rows || i==1 || j==columns) {
                    System.out.print("* ");
                }else{
                    System.out.print("  ");
                }    
            }
            System.out.println();
        }    
    }
}
