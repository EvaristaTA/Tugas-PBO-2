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
public class KeramikConstructor {
    /*membuat atribut*/
    int panjang;
    int lebar;
    int luas;
    int isibox;
    int harga;
    
    //constructor
    KeramikConstructor(int p, int l, int L, int i, int h){
        this.panjang = p;
        this.lebar = l;
        this.luas = L;
        this.isibox = i;
        this.harga = h;
    }
    
    /*membuat methode*/
   
   void hitungKeramik(){
        int keramik = this.luas / (this.panjang * this.lebar);
        System.out.println("Keramik: " + keramik + "  buah"); 
    }
    void hitungBox(){
        int box = (this.luas / (this.panjang * this.lebar)) / this.isibox;
        System.out.println("Total box: " + box + "  Box"); 
    }
     void hitungHarga(){
        int harga = ((this.luas / (this.panjang * this.lebar)) / this.isibox) * this.harga;
        System.out.println("Total harga: " + harga + "  rupiah"); 
    }
}

