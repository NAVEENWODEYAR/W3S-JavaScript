// Autoboxing & Unboxing in Java using wrapper classes. 

public class AutoBx1 
{
    public static void main(String args[])
    {
        System.out.println("******************");
        System.out.println("Primitive Data Types.");
            byte b = 1;
            boolean bl = true;

            char c = 'C';
            short s = 56;

            int i = 1000;
            float f = 1.5f;

            long l = 987645311;
            double d = 456313.00;

            System.out.println(b);
            System.out.println(bl);
            System.out.println(c);
            System.out.println(s);
            System.out.println(i);
            System.out.println(f);
            System.out.println(l);
            System.out.println(d);
        System.out.println("******************");
        
        System.out.println("Primitive to corresponding wrapper objects using *****.valueOf().");

            Byte bt = Byte.valueOf(b);
            Boolean bo = Boolean.valueOf(bl);
            Character ch = Character.valueOf(c);
            Short sh = Short.valueOf(s);
            Integer it = Integer.valueOf(i);
            Float ff = Float.valueOf(f);
            Long ll = Long.valueOf(l);
            Double dd = Double.valueOf(d);
            System.out.println(bt);
            System.out.println(bo);
            System.out.println(ch);
            System.out.println(sh);
            System.out.println(it);
            System.out.println(ff);
            System.out.println(ll);
            System.out.println(dd);

        System.out.println(d==dd);

           
        }
    }