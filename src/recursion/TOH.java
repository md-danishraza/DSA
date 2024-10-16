package recursion;

public class TOH {
    static int count = 0;
    static int count2 = 0;

    static void toh(int n, int start, int end) {
        count++;
        if (n == 1) {
            pm(start, end);
        } else {
            int other = 6 - (start + end);

            toh(n - 1, start, other);
            pm(start, end);
            toh(n - 1, other, end);
        }

    }

    static void pm(int start, int end) {
        System.out.println("Rod " + start + " --> " + "Rod" + end);
    }

    static void toh2(int n, char from_rod,
            char to_rod, char aux_rod) {

        if (n == 0) {
            return;
        } else {
            count2++;
            toh2(n - 1, from_rod, aux_rod, to_rod);
            System.out.println("Move disk " + n + " from rod "
                    + from_rod + " to rod "
                    + to_rod);
            toh2(n - 1, aux_rod, to_rod, from_rod);
        }

    }

    public static void main(String[] args) {
        toh(3, 1, 3);

        toh2(3, 'A', 'C', 'B');

        System.out.println(count + " " + count2);
    }
}
