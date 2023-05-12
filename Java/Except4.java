// Exception Handling in Java 

public class Except4
{
    public static void main(String [] args)
    {
       try
       {
        int a [] = new int[5];
        a[10] = 10;
       }
       finally 
       {
            int arr[]  = new int[15];
                for(int i=0; i<=10; i++)
                {
                    arr[i] = i;
                }
            System.out.println(arr);

                for(int i=0; i<= arr.length; i++)
                {
                    System.out.println(i);
                }
       }
    }
}
