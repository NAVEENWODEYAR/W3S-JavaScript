// Exception Handling in Java 

public class Except2
{
    public static void main(String [] args)
    {
       try
       {
        String st = "string";
        int i = Integer.parseInt(st);
       }
       catch(Exception e)
       {
        e.printStackTrace();
       }
    }
}
