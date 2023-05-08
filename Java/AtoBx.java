public class AtoBX 
{
    public static void main (String args[])
    {
        System.out.println("AutoBoxing & UnBoxing in Java.");
        int a = 5;
        // Integer b = a;
        Integer c = Integer.valueOf(a);

        System.out.println(a == c);
        // System.out.println(a.equals(c));


        Double d = 54654.55;
        double dd = d.doubleValue();
        System.out.println(d == dd);
    }
}