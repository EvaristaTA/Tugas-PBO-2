/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package PraktikumPbo2;

/**
 *
 * @author User
 */
public class Pbo2 {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        System.out.println("PENGGUNAAN NON VOID");
        System.out.println("Keramik A");
        KeramikNonVoid knv1 = new KeramikNonVoid();
        knv1.luas = 1000000;
        knv1.isibox = 10;
        knv1.harga = 54000;
        knv1.panjang = 30;
        knv1.lebar = 30;
        System.out.println("Keramik: " + knv1.hitungKeramik() + "  buah");
        System.out.println("Total box: " + knv1.hitungBox() + "  Box");
        System.out.println("Total harga: " + knv1.hitungHarga() + "  rupiah");
        
        System.out.println("Keramik B");
        KeramikNonVoid knv2 = new KeramikNonVoid();
        knv2.luas = 1000000;
        knv2.isibox = 5;
        knv2.harga = 65000;
        knv2.panjang = 40;
        knv2.lebar = 40;
        System.out.println("Keramik: " + knv2.hitungKeramik() + "  buah");
        System.out.println("Total box: " + knv2.hitungBox() + "  Box");
        System.out.println("Total harga: " + knv2.hitungHarga() + "  rupiah");
        
        System.out.println("Keramik C");
        KeramikNonVoid knv3 = new KeramikNonVoid();
        knv3.luas = 1000000;
        knv3.isibox = 8;
        knv3.harga = 60000;
        knv3.panjang = 30;
        knv3.lebar = 40;
        System.out.println("Keramik: " + knv3.hitungKeramik() + "  buah");
        System.out.println("Total box: " + knv3.hitungBox() + "  Box");
        System.out.println("Total harga: " + knv3.hitungHarga() + "  rupiah");
        
        System.out.println("PENGGUNAAN CONSTRUCTOR");
        System.out.println("Keramik A");
        KeramikConstructor kc1 = new KeramikConstructor(30, 30, 1000000, 10, 54000);
        kc1.hitungKeramik();
        kc1.hitungBox();
        kc1.hitungHarga();
       
        System.out.println("Keramik B");
        KeramikConstructor kc2 = new KeramikConstructor(40, 40, 1000000, 5, 65000);
        kc2.hitungKeramik();
        kc2.hitungBox();
        kc2.hitungHarga();
        
        System.out.println("Keramik C");
        KeramikConstructor kc3 = new KeramikConstructor(30, 40, 1000000, 8, 60000);
        kc3.hitungKeramik();
        kc3.hitungBox();
        kc3.hitungHarga();
        
    }
    
}

