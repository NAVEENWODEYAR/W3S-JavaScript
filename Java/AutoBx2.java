// Autoboxing & Unboxing in Java using wrapper classes. 

public class AutoBx1 
{
    public static void main(String args[])
    {
        System.out.println("******************");
        System.out.println("Wrapper Objects.");
           
           Boolean b = false;
           Byte by = 45;

           Character c = 'b';
           Short s = 465;

           Float f = 3.14f;
           Integer i = 5;

           Long l = 974654L;
           Double d = 465465.46;

        System.out.println("UnBoxing - from Wrapper to respective Primitive types.");
            boolean bl = b.booleanValue();
            byte bt = by.byteValue();
            char ch = c.charValue();
            short sh = s.shortValue();
            float ft = f.floatValue();
            int ii = i.intValue();
            long ll = l.longValue();
            double db = d.doubleValue();
        System.out.println("************");
        System.out.println(b==bl);
        System.out.println(b.equals(bl));


           int j = i.intValue();
           System.out.println(i==j);
           System.out.println(i.equals(j));           
        }
    }