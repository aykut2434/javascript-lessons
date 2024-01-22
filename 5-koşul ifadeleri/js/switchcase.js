/* 
switch-case yapısı
switch(value){
    case1:
    // yapılacak işler
    break;
    case2:
    //yapılacak işler
    break;
    default:break;
}
*/
var date= new Date();
//javascript tarih ve zaman bilgisini almak için date nesnesi kullanılır.
document.write("Bugün:"+date.getDay()+"<br>");
//data 0 ile 6 arası değerler tutuyopazar :0 ,pazartesi:1 salı:2.... cumertesi:6
var deger=date.getDay();//3
switch(deger){
    case 0:
        day ="pazar";
        break;
        case 1 : 
        day="pazartesi";
        break;
        case 2: 
        day="salı";
        break;
        case 3 :
            day="çarşamba";
            break;
            case 4:
         day= "perşembe";
         break;
         case 5 :
         day="cuma";
         break;
         case 6:
            day ="cumartesi";
            break;
}
document.write("Bugün Günlerden: "+day);














