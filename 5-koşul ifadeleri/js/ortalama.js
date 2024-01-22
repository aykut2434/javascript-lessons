var vizenotu=20;
var finalnotu=65;
//işlem: 
var ortalama =(vizenotu*0.4)+(finalnotu*0.6);
document.write("ortalama değeri:"+ortalama+"<br>")
// koşul belirleme
if(ortalama >=50 && ortalama<=70){
  document.write("C Notu Aldınız.");
} else if (ortalama >=70 && ortalama <=90){document.write("B notu aldınız")}
else if (ortalama>= 90&& ortalama<=100){document.write("A notu aldınız")
}
 else{
    document.write ("kaldınız geçmiş olsun");
 }
 document.write ("<hr>")
