package patterns;

public class numberpyramid {
    public static void main(String[] args) {
        int rows = 5;

        for (int i = 1; i <= rows; i++) {
            for (int j = 1; j <= rows - i; j++) {
                //for spaces 
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                //number i with space to form pyramid
                System.out.print(i+" ");
            /* for double numbers (to make pyramid without space)
            for (int k = 1; k <= 2 * i - 1; k++) {
                System.out.print(i);
            } */
            }
            System.out.println();       

        }
    }
}
