function yaz() {
    document.write("merhaba dünya"); document.write("<hr>")
} 
// Parametreli Fonksiyon
function topla(number1,number2){
    var result = number1+number2;
    document.write("sonuç"+result+"<br>");
}
//Parametreli ve geriye değer dönen fonksiyon
function carp(number1,number2) {
    var result =number1*number2;
    return result; 
} 
/* 
recursive(özyinelemeli) fonksiyon
==> kendi kendini çağıran fonksiyonlardır.
örnek: faktöriyel hesabı yapan uygulama geliştireceğiz.*/
function hesapla(sayi){
    deger=1;
    for(var i=1;i<=sayi;i++){
        deger=deger*i;
    }   document.write(sayi+"ifadesinin faktöriyeli:"+deger+"<br>");
}

function hesap (sayi) {
    if (sayi ==0) {
        return 1;
    } else {
        return (sayi * hesap (sayi -1));
    }
}

