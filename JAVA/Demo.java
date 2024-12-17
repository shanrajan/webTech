class Demo {
    public static void main(String []args){
        int x=100,y=200,z=50;

        System.out.println(x==100&&x<y);
        System.out.println(x>y||x<=y);
        System.out.println(x>=z&&z<=99);
        System.out.println(z>x||y!=x);
        System.out.println(z!=-100&&x>0);
        System.out.println(z!=z||y==x);
    }
}