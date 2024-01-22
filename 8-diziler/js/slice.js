//SLİCE () => dizinin belli bir aralığını almak için kullanılır
var harfler = ["A","B","C","D","E","F"]
var test1 =harfler.slice(2,4)//B,C
var test2 =harfler.slice(2,5)
var test3=harfler.slice(-3)// D,E,F

document.write(test1+"<br>" +test2+"<br>"+test3); 
document.write("<hr>")
