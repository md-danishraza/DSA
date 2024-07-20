package bitwise_numbersystem;

import java.util.Arrays;

// flipping a image
public class L_832 {
    static void reverse_arr(int arr[]){


        for(int i=0;i<arr.length/2;i++){
            // hold the current value
            int temp = arr[i];
            // assign last value to current position
            arr[i] = arr[arr.length-1-i];
            // assign current value to last position
            arr[arr.length-1-i] = temp;
        }


    }
    static void reverse_2d(int arr[][]){
        // iteration through each rows
        for(int[] rows: arr){
            // reversing each rows 
            for(int i=0;i<rows.length/2;i++){
                int temp = rows[i];
                rows[i] = rows[rows.length-1-i];
                rows[rows.length-1-i] = temp;
            }
        }
    }
    static void flip_image(int arr[][]){
        for(int[] rows: arr){
            for(int i=0;i<rows.length/2;i++){
                // XOR with 1 reverse the image 
                int temp = rows[i]^1;
                rows[i] = rows[rows.length-1-i]^1;
                rows[rows.length-1-i] = temp;
            }
        }
        System.out.println("flipped image is:-");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println(); // Move to the next line after each row
        }
        
    }
    static void flip_image2(int arr[][]) {
        for (int[] rows : arr) {
            for (int i = 0; i < rows.length / 2; i++) {
                // XOR with 1 reverses the image
                int temp = rows[i] ^ 1;
                rows[i] = rows[rows.length - 1 - i] ^ 1;
                rows[rows.length - 1 - i] = temp;
            }
        }
        System.out.println("Flipped image is:");
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr[0].length; j++) {
                System.out.print(arr[i][j] + " ");
            }
            System.out.println(); // Move to the next line after each row
        }
    }
    
    public static void main(String[] args) {
        int arr[] = {1,2,3,4,5};
        reverse_arr(arr);
        System.out.println(Arrays.toString(arr));

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        reverse_2d(matrix);

        System.out.println("Reversed 2D Array:");
        for (int i = 0; i < matrix.length; i++) {
            for (int j = 0; j < matrix[0].length; j++) {
                System.out.print(matrix[i][j] + " ");
            }
            System.out.println(); // Move to the next line after each row
        }

        int[][] arr2 = {
            {1, 0, 0},
            {1, 0, 0},
            {0, 1, 1}
        };

        flip_image2(arr2);
    }
}
