package patterns;

public class palindromic_num_pyramid {
    public static void main(String[] args) {
        int row = 5;

        for(int i=1;i<=row;i++){
            //loop for spaces row minus i
            for(int j=1;j<=row-i;j++){
                System.out.print(" ");
            }
            //loop for reverse number each row
            for(int j=i;j>=1;j--){
                System.out.print(j);
            }
            //loop for ascending number each row staring from 2
            for(int j=2;j<=i;j++){
                System.out.print(j);
            }
            System.out.println();
        }
    }
}
