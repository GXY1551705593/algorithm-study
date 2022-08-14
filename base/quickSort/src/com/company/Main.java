package com.company;

public class Main {
    public static void main(String[] args) {
        int testTime = 10000;
        int count = 0;
        double x = 0.17;
        for (int i = 0; i < testTime; i++) {
            if (xToPower2() < x) {
                count++;
            }
        }
        System.out.println( (double) count/(double) testTime );
        System.out.println(Math.pow(x,2));
    }

    public static double xToPower2 () {
        return Math.max(Math.random(),Math.random());
    }

    public static  int x () {
        return Math.random() < 0.84 ? 0:1;
    }

    // 等概率返回 0和1
    public static int y () {
        int ans = 0;
        do {
            ans = x();
        } while (ans == x());
        return ans;
    }
}
