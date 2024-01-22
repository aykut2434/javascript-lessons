/*
Örnek 1 den 100 e kadar olan sayıların tek ve çift durumunu
bulalım */
/* tek-çift , sayıyı 2 ile böleceğiz ,
bölmünden kalan 0 ise sayı çiftdir eğer 0 değilse sayı tekdir */
for(var i=0; i<=100;i++) {
    if(i==0 ) {
        console.log(i+"çift sayıdır")
    } else if (i%2 ==0){
        console.log(i+"Çift sayıdır")
    }else{console.log (i+"Tek Sayıdır.")
}
    }



