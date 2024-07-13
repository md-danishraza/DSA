package patterns;

public class floydstriangle {
    public static void main(String[] args) {
        int row = 5;
        int count = 1;
        for(int i=1;i<=row;i++){              //row 
            for(int j=1;j<=i;j++){              //column
                System.out.print(count+" ");       //counted numbers
                count++;
            }
            System.out.println();
        }
    }
}
