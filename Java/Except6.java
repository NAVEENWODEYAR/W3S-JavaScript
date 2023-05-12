// Exception Handling in Java 

public class Except6
{
    public static void main(String args[])
    {
        // Exception Handling

        try
        {
            int arr[] = new int[10];
            arr[15] = 15;
            // int a = 10/0;
        }

        catch (ArrayIndexOutOfBoundsException e)
        {
            e.printStackTrace();
        }
    }
}