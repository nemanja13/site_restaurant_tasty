var url=location.href;
var nazivLinka=["Početna", "Meni", "Kontakt", "O autoru"];
var putanjaLinka=["index.html", "meni.html", "kontakt.html", "oAutoru.html"];
function pravljenjeMenija(){
    var ul=document.getElementsByClassName("dinamickiMeni")[0];
    var li="";
    for(var i=0; i<putanjaLinka.length; i++){
        li+=`<li><a href=${putanjaLinka[i]}>${nazivLinka[i]}</a></li>`;
    }
    ul.innerHTML=li;
}

var facebook="https://www.facebook.com";
var instagram="https://www.instagram.com";
var twitter="https://twitter.com";
var youtube="https://youtube.com";
var footer=document.getElementsByClassName("footer")[0];
footer.innerHTML=`<div class="row d-flex justify-content-around">
<div class="col-lg-4 mt-5 text-center d-none d-lg-block">
    <h5 class="mb-5">O nama</h5>
    <p class="text-justify">Restoran „Tasty“ je mesto uzbudljivih gastronomskih susreta domaćinskog i kosmopolitskog, lokalnog i nacionalnog. Mesto gde se tradicija prepliće sa modernošću. Mesto gde se opušta i uživa. Prostor koji odiše intimom, toplinom šarmom doma. Zaklon koji budi najdivnija sećanja. Utočište gde ćete se uvek osećati kao među svojima.</p>
</div>
<div class="col-lg-4 mt-5 col-sm-6 text-center">
    <h5 class="mb-5">Radno vreme</h5>
    <p>Ponedeljak-Četvrtak</p>
    <p>11:00 - 22:00</p>
    <p>Petak-Nedelja</p>
    <p>11:00 - 23:00</p>
</div>
<div class="col-lg-4 mt-5 col-sm-6 text-center">
    <h5 class="mb-5">Kontakt</h5>
    <p>Adresa: Bulevar Kralja Aleksandra bb</p>
    <p>Telefon:</p>
    <p>011/324-231</p>
    <p>065/324-231-423</p>
    <p>Email:</p>
    <p>tasty&#64;gmail&#46;com</p>
    <a href=${facebook}><i class="fab fa-facebook-f"></i></a>
    <a href=${instagram} class="ml-5"><i class="fab fa-instagram"></i></a>
    <a href=${twitter} class="ml-5"><i class="fab fa-twitter"></i></a>
    <a href=${youtube} class="ml-5"><i class="fab fa-youtube"></i></a>
</div>
</div>
<div class="col-lg-12">
<hr class="linija mt-4"/>
<p class="copyRight text-center h6 mt-3">Copyright &copy; 2019 by Nemanja Maksimović. All rights reserved. Documentation: <a href="dokumentacija.pdf">documentation</a>, <a href="sitemap.xml">sitemap</a> </p>
</div>`;

$(document).ready(function(){
        var bar=$("#sideNav> a");
        bar.click(
        function(e){
            e.preventDefault();
            var sideNav=$("#sideNav ul");
            sideNav.toggle(
                function(){
                    $(this).find("ul").slideDown();
                }, 
                function(){
                    $(this).find("ul").slideUp();
                });
        });
    $(".scrollToTop").click(function(){
        $("html").animate({
            scrollTop: 0
        }, 1500);
    });
    $(window).scroll(function(){
        let top = $(this)[0].scrollY;
        if(top > 600){
            $(".scrollToTop").addClass("vidljiv");
            $(".scrollToTop").removeClass("nevidljiv");
        } else {
            $(".scrollToTop").addClass("nevidljiv");
            $(".scrollToTop").removeClass("vidljiv");
        }
    });
});

if(url.indexOf("index.html")!=-1){

    window.onload=function(){
        proveraRezervacije();
        addEventListener("scroll", scroll);
        pravljenjeMenija();
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


    var oNama=document.getElementById("slikaONama").previousElementSibling;
    oNama.innerHTML=`<h4 class="podNaslov">Dobrodošli u restoran Tasty</h4>
    <p>Restoran „Tasty“ je mesto uzbudljivih gastronomskih susreta domaćinskog i kosmopolitskog, lokalnog i nacionalnog. Mesto gde se tradicija prepliće sa modernošću. Mesto gde se opušta i uživa, gde se dobro jede i gde se toče najfinija vina ili rakije. Mesto koje budi sva vaša čula.</p>
    <p>Ali „Tasty“ je, pre svega, vaša druga kuća, puna prepoznatljivih boja i poznatih ukusa detinjstva. Prostor koji odiše intimom, toplinom i šarmom doma. Zaklon koji budi najdivnija sećanja. Utočište gde ćete se uvek osećati kao među svojima.</p>`;
    var oNama2=document.getElementById("slikaONama2").nextElementSibling;
    oNama2.innerHTML=`<h4 class="podNaslov">Savršeno mesto za vaše posebne prilike</h4>
    <p>Kod nas možete ostvariti sve vaše želje, jer smo mi vaša savršena lokacija za realicajicu svih vrsta događaja.</p>
    <p>Na vama je da odaberete datum i menu, a na nama je da svaki sastojak bude perfektno odmeren i svaki gram ukusa pažljivo ukombinovan.</p><p>Muzika, ples, simfonija ukusa, savršena usluga i vaš lični event menadžer – sve na jednom mestu! Neka sve bude stvoreno baš po vašim željama.</p>`;



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
        setTimeout(broj, 200);
    }
    function scroll(){
        var s=pageYOffset;
        if(s>1300){
            broj();
            removeEventListener("scroll", scroll);
        }
    }
}
if(url.indexOf("kontakt.html")!=-1){
    window.onload=function(){
        provera();
        pravljenjeMenija();
    }
    function provera(){
        var posalji=document.getElementById("posalji");
        var ime=document.getElementById("ime");
        var prezime=document.getElementById("prezime")
        var email=document.getElementById("email");
        var regExpIme=/^[A-ZČĆŠĐŽ][a-zčćšđž]{2,14}(\s[A-Z][a-z]{2,14})*$/;
        var regExpPrezime=/^[A-ZČĆŠĐŽ][a-zčćšđž]{4,19}(\s[A-Z][a-z]{4,19})*$/;
        var regExpEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
        posalji.addEventListener("click", function(){
            if(regExpIme.test(ime.value.trim())){
                document.getElementById("greskaIme").classList.add("nevidljiv");
                document.getElementById("greskaIme").classList.remove("vidljiv");
            }else{
                document.getElementById("greskaIme").classList.add("vidljiv");
                document.getElementById("greskaIme").classList.remove("nevidljiv");
            }
            if(regExpPrezime.test(prezime.value.trim())){
                document.getElementById("greskaPrezime").classList.add("nevidljiv");
                document.getElementById("greskaPrezime").classList.remove("vidljiv");
            }else{
                document.getElementById("greskaPrezime").classList.add("vidljiv");
                document.getElementById("greskaPrezime").classList.remove("nevidljiv");
            }
            if(regExpEmail.test(email.value.trim())){
                document.getElementById("greskaEmail").classList.add("nevidljiv");
                document.getElementById("greskaEmail").classList.remove("vidljiv");
            }else{
                document.getElementById("greskaEmail").classList.add("vidljiv");
                document.getElementById("greskaEmail").classList.remove("nevidljiv");
            }
        });
    }
}
if(url.indexOf("meni.html")!=-1){
    window.onload=function(){
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
    
function jelovnik(naziv, niz1, niz2){
    for(i in niz1){
    var div=document.createElement("div");
    div.classList.add("col-lg-12");
    div.classList.add("d-flex");
    div.classList.add("justify-content-between");
    var p1=document.createElement("p");
    var p2=document.createElement("p");
    p1.innerHTML=niz1[i];
    p2.innerHTML=niz2[i];
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
    
    
    var slikaHrane=["images/slikaHrane0.jpg","images/slikaHrane1.jpg","images/slikaHrane2.jpg","images/slikaHrane3.jpg","images/slikaHrane4.jpg","images/slikaHrane5.jpg"];
    
    var nizDorucak=["Kajgana", "Poširana jaja", "Francuske prženice", "Palačinke od tikvica", "Omlet / jaja na oko", "Omlet sa povrćem / jaja na oko sa povrćem", "Omlet šunka / jaja na oko sa šunkom"];
    var nizDorucakCene=[390, 420, 330, 440, 290, 330, 360];
    var nizSendvici=["Tasty sendvič", "Club sendvič za dve osobe", "Beogradski sendvič", "Sendvič sa grilovinom piletinom", "Sendvič sa grilovinom ćuretinom", "Sendvič sa dimljenim lososom"];
    var nizSendviciCene=[570, 660, 390, 390, 440, 490];
    var nizJelaSaRostilja=["Pljeskavica", "Gurmanska pljeskavica", "Leskovački uštipci", "Ćevapi", "Kobasice", "Svinjska rebarca", "Rolovano pileće belo u slanini"];
    var nizJelaSaRostiljaCene=[480, 490, 490, 470, 480, 210, 480];
    var nizJelaKuce=["<a href="+slikaHrane[0]+" rel='slikaHrane'><i class='far fa-image'></i></a> Karađorđeva šnicla", "<a href="+slikaHrane[1]+" rel='slikaHrane'><i class='far fa-image'></i></a> Šnicla na puteru", "<a href="+slikaHrane[2]+" rel='slikaHrane'><i class='far fa-image'></i></a> Pikantni goveđi file", "<a href="+slikaHrane[3]+" rel='slikaHrane'><i class='far fa-image'></i></a> Piletina sa gamborima i pečurkama", "<a href="+slikaHrane[4]+" rel='slikaHrane'><i class='far fa-image'></i></a> Ćureće rolnice", "<a href="+slikaHrane[5]+" rel='slikaHrane'><i class='far fa-image'></i></a> Ćuretina sa mlincima"];
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

    $(document).ready(function(){
        $("#jelaKuce").on('click', $('#jelaKuce a[rel=slikaHrane]'), function(e){
            e.preventDefault();
            $('a[rel=slikaHrane]').colorbox({
            transition: 'fade',
            speed: 500,
            current: "{current} od {total}"
        });});

        });
}
if(url.indexOf("oAutoru.html")!=-1){
    window.onload=function(){
        pravljenjeMenija();
    }
}