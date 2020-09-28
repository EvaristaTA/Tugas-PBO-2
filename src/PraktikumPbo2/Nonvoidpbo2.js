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
public class Nonvoidpbo2 {
    /*membuat atribut*/
    int panjang;
    int lebar;
    int luas;
    int keramik;
    int isibox;
    int harga;
    
    /*membuat methode*/
   
    int hitungKeramik(){
        int keramik;
        keramik = this.luas / (this.panjang * this.lebar);
        return keramik; 
    }
    int hitungBox(){
        int box;
        box = (this.luas / (this.panjang * this.lebar)) / this.isibox;
        return box; 
    }
     int hitungHarga(){
        int harga;
        harga = ((this.luas / (this.panjang * this.lebar)) / this.isibox) * this.harga;
        return harga;
     }
    
}

