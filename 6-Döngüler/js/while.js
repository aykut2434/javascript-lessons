/* 
While (Şart) {
    // şartımız gerçekleşene kadar çalışacak kodlar yazacağız }

 örnek :1 den 10 a kadar sayıların toplamını bulalım} 
 */

var i =0 ;
var toplam =0;
while (i<=10) {
    toplam += i;// toplam =toplam +i;
    i++;

}
document.write ("While döngüsünde 1den 10 a kadar olan sayıların toplamı: "+toplam)
document.write ("<hr>")

