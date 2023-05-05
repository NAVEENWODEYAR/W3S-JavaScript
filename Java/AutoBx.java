// Autoboxing & Unboxing in Java using wrapper classes. 

class AutoBx
{
    public static void main(String [] args)
    {
        System.out.println("Autoboxing.");
            int a = 5;
            Integer b = 5;                      // implicit autoboxing
            Integer c = Integer.valueOf(a);     // explicit autoboxing
                System.out.println(a);
                System.out.println(b);
                System.out.println(c);
                System.out.println(c.intValue());   // intValue()- get the value associated with the corresponding wrapper object.

        System.out.println("UnBoxing.");
            Integer q = 5;
            int w = q;                              // implicit unboxing
            int e = q.intValue();                   // explicit unboxing
                System.out.println(q);
                System.out.println(w);
                System.out.println(e);

    }
}