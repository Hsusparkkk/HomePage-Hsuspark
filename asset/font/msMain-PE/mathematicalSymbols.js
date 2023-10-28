// naturalNums()wholeNums()zahl()quotients()realNums()complexNums()
const nN=document.getElementsByClassName("naturalNums");
const wN=document.getElementsByClassName("wholeNums");
const z=document.getElementsByClassName("zahl");
const q=document.getElementsByClassName("quotients");
const rN=document.getElementsByClassName("realNums");
const cN=document.getElementsByClassName("complexNums");
const mB=document.getElementsByClassName("moreButton")
const iC=document.getElementById("inboxContent");

// inbox content
var nnIC="N:自然數是指在自然界中常見的、明顯出現的數字。<br>\
因此，它是一個完整的、非負的數字。<br>\
自然數的集合，表示為N，可以用兩種方式中的一種定義： N = {0, 1, 2, 3, ...} N = (1, 2, 3, 4, ...";
var wnIC="暫無。"
var zIC="Z:在數學中代表的是整數集。<br>\
包括數字：<br>\
1、正整數，即大於0的整數如，1，2，3······直到n。<br>\
2、零，既不是正整數，也不是負整數，它是介於正整數和負整數的數。<br>\
3、負整數，即小於0的整數如，-1，-2，-3······直到-n。（n為正整數）";
var qIC="Q：在數學中代表的是有理數集。<br>\
包括數字：<br>\
1、正有理數，包括正整數和正分數，例如1，2，3······直到n，以及1/2，1/3······正分數。<br>\
2、負有理數，包括負整數和負分數，例如-1，-2，-3······直到-n，以及-1/2，-1/3······負分數。<br>\
3、零。"
var rnIC="R：在數學中代表的是實數集。<br>\
包括數字：<br>\
1、有理數，由所有分數，整數組成，總能寫成整數、有限小數或無限循環小數，並且總能寫成兩整數之比。<br>\
2、無理數，實數範圍內不能表示成兩個整數之比的數。常見的無理數有：圓周長與其直徑的比值，歐拉數e，黃金比例φ等等。";
var cnIC="C:複數集，數形結合就是整個複平面<br>";
var mbIC="1. <a href=\'https://zh.wikipedia.org/zh-tw/%E6%95%B0%E5%AD%A6%E7%AC%A6%E5%8F%B7%E8%A1%A8\' target=\'blank\'>數學符號表</a><br>\
2. <a href=\'https://kknews.cc/zh-tw/education/e6mbpby.html\' target=\'blank\'>TW511教學網</a><br>\
Links above are recommended.(For Now.)";
// document.na
var cbIC="<p id=\"inboxContent\"><br>\
Click <strong style=\"font-size: larger;\">ANY BUTTON</strong> to try!! <br>\
</p>";
var dfIC="<p id=\"inboxContent\">\
Click <strong style=\"font-size: larger;\">ANY BUTTON</strong> to try!!\
</p>"
var fcIC="";
function naturalNums(){
   document.getElementById("inboxContent").innerHTML=nnIC;
}
function wholeNums(){
    document.getElementById("inboxContent").innerHTML=wnIC;
 }
 function zahl(){
    document.getElementById("inboxContent").innerHTML=zIC;
 }
 function quotients(){
    document.getElementById("inboxContent").innerHTML=qIC;
 }
 function realNums(){
    document.getElementById("inboxContent").innerHTML=rnIC;
 }
 function complexNums(){
    document.getElementById("inboxContent").innerHTML=cnIC;
 }
 function moreButton(){
    document.getElementById("inboxContent").innerHTML=mbIC;
 }
 function cleanButton(){
   document.getElementById("inboxContent").innerHTML=dfIC;
 }
 function fictionChange(){
   document.getElementById("inboxContent").innerHTML=fcIC;
 }
// or
// nN.addEventListener("click",function() {
//     alert("hello world2");
// })