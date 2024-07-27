package recursion.getting_started;
// Given an integer num, return the number of steps to reduce it to zero.
// In one step, if the current number is even, you have to divide it by 2, otherwise, you have to subtract 1 from it.
public class L_1342 {
    static int fn(int num,int step){
        if(num==0){
            return step;
        }

        if(num%2==0){
            return fn(num/2, step+1);
        }else{
            return fn(num-1,step+1);
        }
    }
    public static void main(String[] args) {
        System.out.println(fn(10, 0));
    }
}
