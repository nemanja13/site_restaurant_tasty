window.onload=function(){
    meni();
    pravljenjeMenija();
    jelovnik(dorucak, nizDorucak, nizDorucakCene);
    jelovnik(sendvici, nizSendvici, nizSendviciCene);
    jelovnik(jelaSaRostilja, nizJelaSaRostilja, nizJelaSaRostiljaCene);
    jelovnik(jelaKuce, nizJelaKuce, nizJelaKuceCene);
    jelovnik(obrokSalate, nizObrokSalate, nizObrokSalateCene);
    jelovnik(salate, nizSalate, nizSalateCene);
    jelovnik(kolaci, nizKolaci, nizkolaciCene);
    jelovnik(torte, nizTorte, nizTorteCene);
    jelovnik(alkoholnaPica, nizAlkoholnaPica, nizAlkoholnaPicaCene);
    jelovnik(bezAlkoholna, nizBezAlkoholna, nizBezAlkoholnaCene);
}
var nazivLinka=["Početna", "Meni", "Kontakt", "O autoru"];
var putanjaLInka=["index.html", "meni.html", "kontakt.html", "oAutoru.html"]
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

function jelovnik(naziv, niz1, niz2){
for(i in niz1){
var div=document.createElement("div");
div.classList.add("col-lg-12");
div.classList.add("d-flex");
div.classList.add("justify-content-between");
var p1=document.createElement("p");
var p2=document.createElement("p");
p1.textContent=niz1[i];
p2.textContent=niz2[i];
div.appendChild(p1);
div.appendChild(p2);
naziv.appendChild(div);
}
}

var dorucak=document.getElementById("dorucak");
var sendvici=document.getElementById("sendvici");
var jelaSaRostilja=document.getElementById("jelaSaRostilja");
var jelaKuce=document.getElementById("jelaKuce");
var obrokSalate=document.getElementById("obrokSalate");
var salate=document.getElementById("salate");
var kolaci=document.getElementById("kolaci");
var torte=document.getElementById("torte");

var alkoholnaPica=document.getElementById("alkoholnaPica");
var bezAlkoholna=document.getElementById("bezAlkoholna");

var nizDorucak=["Kajgana", "Poširana jaja", "Francuske prženice", "Palačinke od tikvica", "Omlet / jaja na oko", "Omlet sa povrćem / jaja na oko sa povrćem", "Omlet šunka / jaja na oko sa šunkom"];
var nizDorucakCene=[390, 420, 330, 440, 290, 330, 360];
var nizSendvici=["Tasty sendvič", "Club sendvič za dve osobe", "Beogradski sendvič", "Sendvič sa grilovinom piletinom", "Sendvič sa grilovinom ćuretinom", "Sendvič sa dimljenim lososom"];
var nizSendviciCene=[570, 660, 390, 390, 440, 490];
var nizJelaSaRostilja=["Pljeskavica", "Gurmanska pljeskavica", "Leskovački uštipci", "Ćevapi", "Kobasice", "Svinjska rebarca", "Rolovano pileće belo u slanini"];
var nizJelaSaRostiljaCene=[480, 490, 490, 470, 480, 210, 480];
var nizJelaKuce=["Karađorđeva šnicla", "Šnicla na puteru", "Pikantni goveđi file", "Piletina sa gamborima i pečurkama", "Ćureće rolnice", "Ćuretina sa mlincima"];
var nizJelaKuceCene=[860, 860, 1750, 1250, 1250, 1250];
var nizObrokSalate=["Integralna salata", "Cezar salata", "Biftek salata", "Salata sa tunom", "Tai salata sa piletinom"];
var nizObrokSalateCene=[550, 820, 1100, 990, 820];
var nizSalate=["Šopska salata", "Mix zelenih salata", "Krem salata", "Coleslaw salata", "Kapreze salata"];
var nizSalateCene=[350, 350, 350, 350, 750];
var nizKolaci=["Krempita", "Francuska krempita", "Plazma bela čokolada", "Cheesecake", "Pita jabuka vanila"];
var nizkolaciCene=[250, 350, 300, 380, 340];
var nizTorte=["Nugat torta", "Moskva torta", "Zaher torta", "Doboš torta", "Reforma torta", "Boem torta"];
var nizTorteCene=[390, 390, 370, 320, 320, 330];
var nizAlkoholnaPica=["Vinjak", "Kruna lozovača", "Vodka belvedere", "Rakija šljiva", "Rakija kajsija", "Rum havana", "Gorki list"];
var nizAlkoholnaPicaCene=[190, 220, 590, 290, 290, 230, 250];
var nizBezAlkoholna=["Coca cola", "Sprite", "Fanta orange", "Schweppes", "Next", "Limunada"];
var nizBezAlkoholnaCene=[200, 200, 200, 200, 200, 220];