window.onload=function(){
    meni();
    provera();
    pravljenjeMenija();
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
    var sideNav=document.querySelector("#sideNav ul");
    bar.addEventListener("click", function(event){
        event.preventDefault();
        sideNav.classList.toggle("vidljiv")
        sideNav.classList.toggle("nevidljiv")
        
    })
}
function provera(){
    var posalji=document.getElementById("posalji");
    var ime=document.getElementById("ime");
    var prezime=document.getElementById("prezime")
    var email=document.getElementById("email");
    var regExpIme=/^[A-Z][a-z]{2,14}(\s[A-Z][a-z]{2,14})*$/;
    var regExpPrezime=/^[A-Z][a-z]{4,19}(\s[A-Z][a-z]{4,19})*$/;
    var regExpEmail=/^\S+(\.?\-?\S+)*@\S(\.?\-?\S+)+$/;
    posalji.addEventListener("click", function(){
        if(regExpIme.test(ime.value)){
            document.getElementById("greskaIme").classList.add("nevidljiv");
            document.getElementById("greskaIme").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaIme").classList.add("vidljiv");
            document.getElementById("greskaIme").classList.remove("nevidljiv");
        }
        if(regExpPrezime.test(prezime.value)){
            document.getElementById("greskaPrezime").classList.add("nevidljiv");
            document.getElementById("greskaPrezime").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaPrezime").classList.add("vidljiv");
            document.getElementById("greskaPrezime").classList.remove("nevidljiv");
        }
        if(regExpEmail.test(email.value)){
            document.getElementById("greskaEmail").classList.add("nevidljiv");
            document.getElementById("greskaEmail").classList.remove("vidljiv");
        }else{
            document.getElementById("greskaEmail").classList.add("vidljiv");
            document.getElementById("greskaEmail").classList.remove("nevidljiv");
        }
    });
}