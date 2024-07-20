package bitwise_numbersystem;

public class no_of_digits {
    static int fn(int number,int base){


        int ans = (int)(Math.log(number)/Math.log(base))+1;

        return ans;
    }
    public static void main(String[] args) {
        System.out.println(fn(4483,10 ));
    }
}
