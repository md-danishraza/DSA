package patterns;

/**
 * solidrhombus
 */
public class solidrhombus {
    public static void main(String[] args) {
        int row = 5;
        int space = row;
        for(int i=1;i<=row;i++){   //outerloop for rows
            for(int h=space;h>=1;h--){      // innerloop for space
                System.out.print("  ");
                
            }
            for(int j=1;j<=row;j++){           //innerloop for star
                System.out.print("* ");
                }
            space--;     //for reducing space after each row (complete outerloop)
            System.out.println(); //new line after each row (complete outerloop)
            }
        }
    }
