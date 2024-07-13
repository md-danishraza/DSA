package patterns;

public class invertednumberpyramid {
    public static void main(String[] args) {
        int row = 5;
        //outerloop 5 to 1
        for(int i=row;i>=1;i--){
            //innerloop 1 to 5
            for(int j=1;j<=i;j++){
                System.out.print(" "+j);
            
            }
            System.out.println(); 
        }
    }
    
}
