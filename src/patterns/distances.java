package patterns;

public class distances {
    static void min(int n){
        n = 2*n;
        for(int row=0;row<=n;row++){
            for(int col=0;col<=n;col++){

                int value = Math.min(Math.min(row, col), Math.min(n-row,n-col));

                System.out.print(value+" ");
            }
            System.out.println();
        }
    }
    static void max(int m){
        int n = 2*m;
        for(int row=0;row<=n;row++){
            for(int col=0;col<=n;col++){

                // original size - min
                int value = m - Math.min(Math.min(row, col), Math.min(n-row,n-col));

                System.out.print(value+" ");
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        min(4);
        max(4);
    }
}
