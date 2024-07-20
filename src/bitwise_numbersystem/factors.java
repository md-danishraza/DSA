package bitwise_numbersystem;

import java.util.ArrayList;
import java.util.List;

public class factors {
    // brutforce approach
    static void fn1(int n){
        System.out.print(1+" ");
        for(int i=2;i<=n/2;i++){
            if(n%i==0){
                System.out.print(i+" ");
            }
        }
        System.out.print(n+" ");
    }
    // optimised method with rootn Time complexity
    static void fn2(int n){

        for(int i=1;i<=Math.sqrt(n);i++){
            if(n%i==0){
                // if divisor != quotient
                if(i != n/i){
                    System.out.print(i+" "+n/i+" ");

                }else{
                    System.out.print(i+" ");
                }
            }
        }
    }
    // Both time and space complexity will be of rootn
    static void fn3(int n){
        List<Integer> secondhalf = new ArrayList<>();

        for(int i=1;i<=Math.sqrt(n);i++){
            if(n%i==0){
                // if divisor != quotient
                if(i != n/i){
                    System.out.print(i+" ");
                    // instead of printing store the factor
                    secondhalf.add(n/i);

                }else{
                    System.out.print(i+" ");
                }
            }

        }
        // print the remaining the ascending order 
        for(int i=(secondhalf.size()-1);i>=0;i--){
            System.out.print(secondhalf.get(i)+" ");
        }
    }

    public static void main(String[] args) {
        fn3(45);
    }
}
