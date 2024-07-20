package bitwise_numbersystem;

public class newton_sqrt {
    static double fn(int n){
        double guess = n;
        double root;

        while (true) {
            root = 0.5 * (guess+(n/guess));

            // if error is less than 1;
            //we found the int root
            if(Math.abs(root-guess)<1){
                break;
            }else{
                // else update the guess
                guess = root;
            }
            
        }
        return root;
    }
    public static void main(String[] args) {
        System.out.println(fn(40));
    }
}
