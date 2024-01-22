// id ile erişim
document.getElementById("change").onclick=function() {
  var üst =document.getElementById("content1").innerHTML;
  var alt=document.getElementById("content2").innerHTML;

  document.getElementById("content1").innerHTML=alt;
document.getElementById("content2").innerHTML=üst;

}
//clas ile erişim
document.getElementById("paragraf").onclick=function(){
  document.getElementsByClassName("text1") [0].innerHTML="Burası ilk paragraf";
  document.getElementsByClassName("text2")[0].innerHTML="Burası ikinci paragraf";
}
  // etiket ile erişim
  document.getElementById("baslik").onclick=function() {

    document.getElementsByTagName("h1")[0].innerHTML="Burası ilk başlık";
    document.getElementsByTagName("h2")[0].innerHTML="Burası alt başlık";
  }
    //css özellikleri değiştirme => style.property
    document.getElementById("cssdegistir").onclick=function () {
      document.getElementById("content1").style.color="blue"; 
      document.getElementById("content2").style.backgroundColor="blue";



    }

 



  