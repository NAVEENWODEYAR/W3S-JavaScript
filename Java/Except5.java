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
       
       catch(Exception e)
       {
        int a = 50/0;
       }
       finally
       {
        System.out.println("Exception can be used in catch block also, but it's not good practise");
       }
    }
}
