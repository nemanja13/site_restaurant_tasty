window.onload=function(){
    pravljenjeMenija();
    meni();
    proveraRezervacije();
    addEventListener("scroll", scroll);
}
var nazivLinka=["Početna", "Meni", "Kontakt", "O autoru"];
var putanjaLInka=["index.html", "meni.html", "kontakt.html", "Oautoru.html"]
function pravljenjeMenija(){
    var ul=document.getElementsByClassName("dinamickiMeni")[0];
    var li="";
    for(var i=0; i<putanjaLInka.length; i++){
        li+=`<li><a href=${putanjaLInka[i]}>${nazivLinka[i]}</a></li>`;
    }
    ul.innerHTML=li;
}
function meni(){
    var bar=document.querySelector("#sideNav a");
    bar.addEventListener("click", function(event){
        event.preventDefault();
    })
}
var lista=document.getElementById("lista");
var niz=["Izaberite", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var html;
for(i in niz){
    html+=`<option value=${i}>${niz[i]}</option>`;
}
lista.innerHTML=html;

function proveraRezervacije(){
    var dugme=document.getElementById("dugme");
    var regDatum=new RegExp(/^([1-9]|[1-2][0-9]|3[0-1])\-([1-9]|1[0-2])\-(20[2-9][0-9])$/);
    var regVreme=new RegExp(/^([1-9]|1[1-9]|2[0-4])\-([1-9]|[1-5][0-9])$/);
    dugme.addEventListener("click", function(){
        if(document.getElementById("lista").value!=0){
            document.getElementById("greskaBrojOsoba").classList.add("nevidljiv");
            document.getElementById("greskaBrojOsoba").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaBrojOsoba").classList.add("vidljiv");
            document.getElementById("greskaBrojOsoba").classList.remove("nevidljiv");
        }
        if(regDatum.test(document.getElementById("datum").value)){
            document.getElementById("greskaDatum").classList.add("nevidljiv");
            document.getElementById("greskaDatum").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaDatum").classList.add("vidljiv");
            document.getElementById("greskaDatum").classList.remove("nevidljiv");
        }
        if(regVreme.test(document.getElementById("vreme").value)){
            document.getElementById("greskaVreme").classList.add("nevidljiv");
            document.getElementById("greskaVreme").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaVreme").classList.add("vidljiv");
            document.getElementById("greskaVreme").classList.remove("nevidljiv");
        }
    });
}
var i=0;
var j=0;
var k=300;
var d=1970;
function broj(){
    var musterije=document.getElementById("musterije");
    var hrana=document.getElementById("hrana");
    var kuvari=document.getElementById("kuvari");
    var godina=document.getElementById("godina");
    if(i<46){
        hrana.textContent=i++;
    }
    if(j<51){
        kuvari.textContent=j++;
    }
    if(k<336){
        musterije.textContent=k++;
    }
    if(d<2000){
        godina.textContent=d++;
    }
    setTimeout(broj, 300);
}
function scroll(){
    var s=pageYOffset;
    if(s>1300){
        broj();
        removeEventListener("scroll", scroll);
    }
}