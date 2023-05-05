
class Test
{
    public static void main(String [] args)
    {
        int a = 5;
        int b = 5;

        String s = "Helen";
        String s1 = "Helen";

        System.out.println(s.equals(s1));             // true
        System.out.println(s ==s1);             // true
        
        
        System.out.println(a == b);             // true
        // System.out.println(a.equals(b));        // error
    }
}