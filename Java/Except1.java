// Exception Handling in Java 

public class Except1
{
    public static void main(String [] args)
    {
       try
       {
        String st = null;
        System.out.println(st.length());
       }
       catch(Exception e)
       {
        e.printStackTrace();
       }
    }
}
