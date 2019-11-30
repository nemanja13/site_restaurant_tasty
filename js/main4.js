window.onload=function(){
    pravljenjeMenija();
    meni();
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

