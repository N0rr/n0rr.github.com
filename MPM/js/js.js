var bl1 = document.querySelector(".pg2-smph-1");
var bl2 = document.querySelector(".pg2-smph-2");
var bl3 = document.querySelector(".pg2-smph-3");
var bl4 = document.querySelector(".pg2-smph-4");
var ph1 = document.querySelector(".pg2-photo1");
var ph2 = document.querySelector(".pg2-photo2");
var ph3 = document.querySelector(".pg2-photo3");
var ph4 = document.querySelector(".pg2-photo4");

var bord1 = document.querySelector(".pg2-clmn-n-1");
var bord2 = document.querySelector(".pg2-clmn-n-2");
var bord3 = document.querySelector(".pg2-clmn-n-3");
var bord4 = document.querySelector(".pg2-clmn-n-4");

var bordBl1 = document.querySelector(".pg2-clmn-n-bl-1");
var bordBl2 = document.querySelector(".pg2-clmn-n-bl-2");
var bordBl3 = document.querySelector(".pg2-clmn-n-bl-3");
var bordBl4 = document.querySelector(".pg2-clmn-n-bl-4");

bl1.addEventListener("click", function (event) {
    event.preventDefault();
    bl2.classList.remove("pg2-small-active");
    bl3.classList.remove("pg2-small-active");
    bl4.classList.remove("pg2-small-active");
    bl1.classList.add("pg2-small-active");
    ph2.classList.remove("pg2-photo-active");
    ph3.classList.remove("pg2-photo-active");
    ph4.classList.remove("pg2-photo-active");
    ph1.classList.add("pg2-photo-active");
   
});
bl2.addEventListener("click", function (event) {
    event.preventDefault();
    bl1.classList.remove("pg2-small-active");
    bl3.classList.remove("pg2-small-active");
    bl4.classList.remove("pg2-small-active");
    bl2.classList.add("pg2-small-active");
    ph1.classList.remove("pg2-photo-active");
    ph3.classList.remove("pg2-photo-active");
    ph4.classList.remove("pg2-photo-active");
    ph2.classList.add("pg2-photo-active");
   
});
bl3.addEventListener("click", function (event) {
    event.preventDefault();
    bl1.classList.remove("pg2-small-active");
    bl2.classList.remove("pg2-small-active");
    bl4.classList.remove("pg2-small-active");
    bl3.classList.add("pg2-small-active");
    ph1.classList.remove("pg2-photo-active");
    ph2.classList.remove("pg2-photo-active");
    ph4.classList.remove("pg2-photo-active");
    ph3.classList.add("pg2-photo-active");
   
});
bl4.addEventListener("click", function (event) {
    event.preventDefault();
    bl1.classList.remove("pg2-small-active");
    bl2.classList.remove("pg2-small-active");
    bl3.classList.remove("pg2-small-active");
    bl4.classList.add("pg2-small-active");
    ph1.classList.remove("pg2-photo-active");
    ph2.classList.remove("pg2-photo-active");
    ph3.classList.remove("pg2-photo-active");
    ph4.classList.add("pg2-photo-active");
   
});
bord1.addEventListener("click", function (event) {
    event.preventDefault();
    bord1.classList.add("clmn-3-active");
    bord2.classList.remove("clmn-3-active");
    bord3.classList.remove("clmn-3-active");
    bord4.classList.remove("clmn-3-active");
    bordBl1.classList.add("pg2-clmn-n-active");
    bordBl2.classList.remove("pg2-clmn-n-active");
    bordBl3.classList.remove("pg2-clmn-n-active");
    bordBl4.classList.remove("pg2-clmn-n-active");
});
bord2.addEventListener("click", function (event) {
    event.preventDefault();
    bord2.classList.add("clmn-3-active");
    bord1.classList.remove("clmn-3-active");
    bord3.classList.remove("clmn-3-active");
    bord4.classList.remove("clmn-3-active");
    bordBl2.classList.add("pg2-clmn-n-active");
    bordBl1.classList.remove("pg2-clmn-n-active");
    bordBl3.classList.remove("pg2-clmn-n-active");
    bordBl4.classList.remove("pg2-clmn-n-active");
});
bord3.addEventListener("click", function (event) {
    event.preventDefault();
    bord3.classList.add("clmn-3-active");
    bord1.classList.remove("clmn-3-active");
    bord2.classList.remove("clmn-3-active");
    bord4.classList.remove("clmn-3-active");
    bordBl3.classList.add("pg2-clmn-n-active");
    bordBl1.classList.remove("pg2-clmn-n-active");
    bordBl2.classList.remove("pg2-clmn-n-active");
    bordBl4.classList.remove("pg2-clmn-n-active");
});
bord4.addEventListener("click", function (event) {
    event.preventDefault();
    bord4.classList.add("clmn-3-active");
    bord1.classList.remove("clmn-3-active");
    bord3.classList.remove("clmn-3-active");
    bord2.classList.remove("clmn-3-active");
    bordBl4.classList.add("pg2-clmn-n-active");
    bordBl1.classList.remove("pg2-clmn-n-active");
    bordBl3.classList.remove("pg2-clmn-n-active");
    bordBl2.classList.remove("pg2-clmn-n-active");
});