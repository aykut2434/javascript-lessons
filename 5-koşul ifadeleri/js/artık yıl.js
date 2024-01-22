/*400'ün katı olan yıllar arttık yıllardır.
Bunun dışında 4'ün katı olan yıllar içersinde yalnız
2004,1996,1992 artık yıllardır.
100'ün katı olmayan yıllar artık yıllardır.
ve bağlacında & iki tarafında doğru olması gerekir veya bağlacında iki taraftan 
biri doğruysa kod çalışacak || */

var year = prompt("yıl değerini giriniz:");

if ((year %400==0)||((year%4==0)&& (year%100!==0 ))) 
{document.write (year+"Aartık yıldır")
}  else {document.write(year+"Artık Yıl Değildir.")}



 

