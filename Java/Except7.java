// Exception Handling in Java 

public class Except6
{
    public static void main(String args[])
    {
        // Exception Handling
        try
        {
            int a = 50/10;
        }
        catch(Exception e)
        {
            e.printStackTrace();
        }
        catch(ArithmeticException e)
        {
            e.printStackTrace();
        }
        catch(NullPointerException e)
        {
            e.printStackTrace();
        }
    }
}