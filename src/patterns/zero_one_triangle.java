package patterns;

public class zero_one_triangle {
    public static void main(String[] args) {
        
        int row = 5;
        for(int i=1;i<=row;i++){      //outer loop
            for(int j=1;j<=i;j++){     //innerloop
                if ((i+j)%2==0) {               
                    System.out.print("1 ");  //if i+j is even 
                } else {
                    System.out.print("0 ");  //if i+j is odd
                }
            }
            System.out.println();    
        }
    }
    
}
