// Exception Handling in Java 

public class Except3
{
    public static void main(String [] args)
    {
       try
       {
        int a [] = new int[5];
        a[10] = 10;
       }
       catch(Exception e)
       {
        e.printStackTrace();
       }
    }
}
