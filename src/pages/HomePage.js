import React from "react";
import { FiCornerRightDown } from "react-icons/fi";
import trener from "../sass/img/trener.jpg"
import trener2 from "../sass/img/trener2.jpg"
import trener3 from "../sass/img/trener3.jpg"
import Stopka from "./Stopka"

const HomePage = () => {
  const ScrollInto=()=>{
    let header = document.querySelector(".aboutUs");
    header.scrollIntoView({
      behavior:"smooth",
    });
let aboutUS = document.querySelectorAll(".animationAboutUs");
aboutUS.forEach(item=>{(
  item.classList.add("aboutUsAnimation"))}

)}





  return (


    <>
      <div className="logo-container">
      <section className="logo">
        <div className="logo_headings">
          <h1 className="logo_text logo_text-main">Fit Warriors</h1>
          <h2 className="logo_text logo_text-sub">Walczymy o swoje zdrowie!</h2>
          <button className="btn btn-about" onClick={ScrollInto}>
            Więcej o nas <FiCornerRightDown />
          </button>
        </div>
      </section></div>
      <div className="homePage-trainersID">
        <section className="section_homePage">
          <div className="row">
            <div className="col-1-of-2">
              <h1 className="u-center-text header-primary aboutUs">
                Kim są FIT WARRIORS?
              </h1>
              <p className="paragraph animationAboutUs">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Asperiores assumenda expedita, adipisci esse ad hic accusantium
                consequuntur sint veniam pariatur cupiditate suscipit? Corporis
                eum ex voluptates? Veniam omnis rem atque. Corporis et est iste
                aliquam quas nobis odit neque sint enim? Debitis obcaecati iusto
                similique illum cupiditate mollitia nisi, repellendus, eos
                soluta odio sunt et reiciendis modi hic, adipisci quo.
                Voluptatum, animi ipsam minus reprehenderit expedita perferendis
                quam veritatis numquam hic, tenetur tempora voluptas cumque
                officia tempore, distinctio error consectetur. Incidunt a
                voluptatibus consectetur optio. Porro recusandae odit sit
                repellendus.
              </p>
            </div>
            <div className="col-1-of-2">
              <div className="col-1-of-2">
                <h1 className="header-primary">
                  Kalkulator zapotrzebowania kalorycznego
                </h1>
                <p className="paragraph animationAboutUs">
                Najlepszym sposobem na zmierzenie, ile wynosi nasze zapotrzebowanie, jest korzystanie z kalkulatora BMR, za pomocą specjalistycznych wzorów wskaże, ile powinniśmy spożywać dziennie. Dokładny kalkulator zapotrzebowania kalorycznego powinien mieć możliwość wskazania tych parametrów, ponieważ one również będą miały niebagatelny wpływ na zmianę sylwetki, odpowiednia podaż protein zapobiegnie utracie masy mięśniowej na redukcji i wspomoże jej budowanie na tzw. masie. 
                </p>
              </div>
              <div className="col-1-of-2">
                <h1 className="header-primary">Generator przepisów</h1>
                <p className="paragraph animationAboutUs">
                Nawet najlepszym mistrzom patelni zdarzają się dni, gdy nie mają pomyslu na smaczny posilek. Tymczasem zróżnicowana dieta i bogactwo składników to podstawa. Jeżeli szukasz źródła inspiracji, a pomysl na prosty obiad to coś, czego bezustannie poszukujesz, to nasz generator przepisów jest idealny dla Ciebie.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="trainersID">
        <div className="header-primary u-center-text ">Twórcy FIT WARRIORS</div>
          <div className="story">
            <figure className="story__shape">
              <img src={trener} alt="" className="story__image" />
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-2">
              Marcelina Borkowska
              </h3>
              <p>
                Założycielka Fit Warriors. Fizjoterapeuta, trener, instruktor, szkoleniowiec. Zajmuje się szeroko rozumianymi treningami zdrowotnymi… od nauki nowych czynności, przez zdobywanie wyniku sportowego, do przywracania utraconej funkcji po kontuzji. Zdobytą wiedzę i wykorzystuje do pomocy osobom aktywnym fizycznie, które pragną osiągnąć najwyższy poziom sprawności i zdrowia lub też odzyskać je po przebytej kontuzji, urazie bądź zabiegu.
              </p>
            </div>
          </div>

          <div className="story">
            <figure className="story__shape">
              <img src={trener2} alt="" className="story__image" />
           
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-2">
              Wojtek Wojciechowski
              </h3>
              <p>
              Trener przygotowania motorycznego. Na co dzień pracuje w klubie sportowym FUKS, gdzie odpowiedzialny jest za przygotowanie fizyczne zawodniczek koszykówki, dodatkowo spełnia się jako trener sportowców amatorów oraz trener personalny.
              </p>
            </div>
          </div>
          <div className="story">
            <figure className="story__shape">
              <img src={trener3} alt="" className="story__image" />
             
            </figure>
            <div className="story__text">
              <h3 className="heading-tertiary u-margin-bottom-2">
              Dawid Olszewski
              </h3>
              <p>
              Absolwent Akademii Wychowania Fizycznego w Poznaniu na kierunku fizjoterapia. Kierownik studiów podyplomowych „medyczny trener personalny” na Wyższej Szkole Edukacji i Terapii w Poznaniu. Absolwent wielu praktyk trenerskich, m.in. w Training for Gold (Sewilla, Hiszpania) i Sports Science Lab (CA, USA) oraz uczestnik wielu szkoleń z zakresu treningu funkcjonalnego.
              </p>
            </div>
          </div>
          <section className="people">
    <div className="header-primary u-center-text people_heading">Ludzie którzy skorzystali z naszej pomocy</div>
      <div className="row">
        <div className="col-1-of-3">
          <h3 className="people_name">Sylwester Sobczak</h3>
          <p className="paragraph">
            Jeden z najlepszych duetów w Polsce. Ludzie z pasją którzy niosą bezinteresownie pomoc innym. Polecam wszystkim którzy chcą zrobić coś ze swoim życiem.
          </p>
        </div>
        <div className="col-1-of-3">
          <h3 className="people_name">Karolina Kowalczyk</h3>
          <p className="paragraph">
          Z Fit Warriors pracuje już od lipca tego roku. Od tego czasu 15 kg na minusie. Na samym początku w ankiecie wybralam co lubię jeść a czego nie lubię. Wszystko mi bardzo smakuje, jest bardzo proste w przygotowaniu. Do diety mam rozpisane również ćwiczenia, co tydzień trenerzy monitorują moje postępy i aktualizują obciążenie i powtórzenia. 
          </p>
        </div>
        <div className="col-1-of-3">
         <h3 className="people_name">Malina Wiśniewska</h3>
          <p className="paragraph">
          Trenerzy godni polecenia. Podchodzi do osoby indywidualnie. Rozmawiają z Tobą i tworzą odpowiedni plan treningowy. Ćwiczenia rozpisane i pokazane. W razie jakis pytan zawsze pomaga. Jeśli chodzi o odżywianie to też można liczyć na jego wsparcie. Jeśli ktoś szuka trenera personalnego i chce zobaczyć efekty swoich wysiłków to Fit warriors są idealni :).
          </p>
        </div>
      </div>
    </section>  
    
        </section>
        <footer><Stopka/></footer>      
      </div>
      
    </>
  );
};

export default HomePage;
