// Exception Handling in Java 

public class Except 
{
    public static void main(String [] args)
    {
        try
        {
            int a = 10/0;
            System.out.println(a);
        }
        catch(ArithmeticException e)
        {
            e.printStackTrace();
            // e.getCause();
            // e.getClass();
            // e.getLocalizedMessage();
        }
    }
}