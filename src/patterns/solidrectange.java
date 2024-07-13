package patterns;

import java.util.Scanner;
public class solidrectange {
    public static void main(String[] args) {
        System.out.println("enter number of rows and column");
        Scanner sc = new Scanner(System.in);
        //int rows = sc.nextInt();
        int rows= sc.nextInt();
        int columns = sc.nextInt();
        for(int j=1;j<=rows;j++){
            for(int i=1;i<=columns;i++){
                System.out.print("* ");
            }
            System.out.println();
        }    
    }
}
