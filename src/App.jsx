import { useState } from 'react'
import React from 'react';
import './App.css'
import "./javascript/vendor/glightbox.js";
import "./javascript/vendor/keen-slider.js";
import "./javascript/vendor/shufle.js";
import "./javascript/main.js";
import "./css/vendor/bootstrap/bootstrap.css"
import './css/main.css';
import './css/responsive.css';
import { useTranslation } from 'react-i18next';
import './i18n.ts';







function Header() {
  const { t, i18n } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  // Función para cambiar el idioma
  const handleChangeLanguage = () => {
    const newLanguage = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLanguage); // Cambiar el idioma en el objeto i18n
  };

  return (
    <>
      {/* header */}
      <header id="headermain">
        <div className="container">
          <div className="row headerwrap">
            <div className="col-xs-12 col-md-12 col-lg-2">
              {/* wrap logo */}
              <div className="headerwrap__logo">
                <img src="src\assets\page\LOGO WEB-02.png" alt="logo" className="img-fluid" />
              </div>
              {/* end wrap logo */}
              {/* navigation icon  */}
              <div className="navicon d-block d-lg-none">
                <div className="navicon__bar"></div>
              </div>
              {/* end navigation icon  */}
            </div>
            <div className="col-lg-10 text-xl-left d-none d-lg-block justify-content-lg-left justify-content-xl-left">
              {/* navigation desktop */}
              <nav className="navpage text-left">
                <ul className="navpage__wrap">
                  <li className="navpage__list"><a href="#sectionhero" className="activelink">{t('intro')}</a></li>
                  <li className="navpage__list"><a href="#aboutsection">{t('about')}</a></li>
                  <li className="navpage__list"><a href="#servicesection">{t('service')}</a></li>
                  <li className="navpage__list"><a href="#portfoliosection">{t('portfolio')}</a></li>
                  <li className="navpage__list"><a href="#contactsection">{t('contact')}</a></li>
                  <li className="navpage__list">
                    <button className="language-button" onClick={handleChangeLanguage}>
                      {t('changeToSpanish')}
                    </button>
                  </li>
                </ul>
              </nav>
              {/* end navigation desktop */}
            </div>
          </div>
        </div>
      </header>
      {/* end header */}
      {/* mobile nav */}
      <div className="overlay">
        <div className="overlay__navigation">
          <ul className="overlay__listnav">
            <li className="navpage__list"><a href="#herosection">{t('intro')}</a></li>
            <li><a href="#aboutsection">{t('about')}</a></li>
            <li><a href="#servicesection">{t('service')}</a></li>
            <li><a href="#portfoliosection">{t('portfolio')}</a></li>
            <li><a href="#contactsection">{t('contact')}</a></li>
          </ul>
        </div>
      </div>
      {/* end mobile nav */}
      {/* PRELOADER */}
      
    </>
  );
}
function MainWrap() {
  const { t } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  return (
    <main id="mainwrap">
      {/* section hero */}
      <div id="sectionhero" className="sectionblock">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 pr-0 mr-0 pl-lg-0 pr-lg-5 mr-lg-0 mt-3 mt-lg-0 align-items-center justify-content-center align-items-lg-left justify-content-lg-left text-center text-lg-left d-flex order-1 order-lg-0 ">
              <div className="infohero ">
                <p className="infohero__p">{t('hello Im')}</p>
                <h1 className="infohero__title">Chris
                  <span>Santacruz</span>
                </h1>
                <span id="typed-text"></span>
                <span className="cursor blink">&nbsp;</span>
              </div>
            </div>
            <div className="col-lg-6 text-center order-0 order-lg-1 mb-5 mb-lg-0">
              <div className="heroimg">
                <img src="src\assets\hero\1.gif" alt="poto" className="img-fluid heroimg__poto" />
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,128L60,149.3C120,171,240,213,360,192C480,171,600,85,720,85.3C840,85,960,171,1080,197.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      {/* end section hero */}
      {/* about section */}
      <div id="aboutsection" className="sectionblock">
      
        <div className="container">
          <div className="row">
            <div className="col-lg-4 text-center text-lg-left">
              <div className="abouthero">
                <h3>{t('Chris')}</h3>
                <h3>{t('Santacruz')}</h3>
              </div>
            </div>
            <div className="col-lg-8 pl-lg-5 text-center text-lg-left">
              <div className="infoabout">
                <p className="infoabout__title">
                  {t('Description')}
                </p>
                <div className="row  text-center text-lg-left">
                  <div className="col-lg-6">
                    <ul className="infoabout__list">
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('fullName')}</span>
                          <p>
                            Christian Felipe Santacruz
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('emailAddress')}</span>
                          <p>
                            Chrissantacruz0603@gmail.com
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('phoneNumber')}</span>
                          <p>
                            +57 3008468223
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-6">
                    <ul className="infoabout__list">
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('speciality')}</span>
                          <p>
                            Web developer
                            mobile developer
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('telegram')}</span>
                          <p>
                            @Chris Santacruz
                          </p>
                        </div>
                      </li>
                      <li>
                        <div className="infoabout__wrap">
                          <span className="mt-4 mb-2 d-block infoabout__title">{t('phoneNumber')}</span>
                          <p>
                            +57 3008468223
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 mt-5 mb-4 pt-5">
              <div className="row">
                <div className="col-lg-3">
                  <div className="counterwrap">
                    <p className="counterwrap__counternum"><span className="counterwrap__counter" data-Speed="5000">10</span><span className="icon">+</span></p>
                    <p>{t('projectsCompleted')}</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="counterwrap">
                    <p className="counterwrap__counternum"><span className="counterwrap__counter" data-Speed="2500">1</span></p>
                    <p>
                      {t('yearsOfExperience')}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="counterwrap">
                    <p className="counterwrap__counternum"><span className="counterwrap__counter" data-Speed="2500">5</span><span className="icon"></span></p>
                    <p>{t('happyClients')}</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="counterwrap">
                    <p className="counterwrap__counternum"><span className="counterwrap__counter" data-Speed="2500">1</span></p>
                    <p>{t('onProjects')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      {/* end about */}
    </main>
  );
}

function Service() {
  const { t } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  return (
    <main id="service">
      {/* service section */}
      <div id="servicesection" className="sectionblock">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,186.7C480,192,600,160,720,138.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path>
        </svg>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="sliderservice" className="sliderservice__contentinner keen-slider">
                <div className="wrapservice keen-slider__slide text-center text-lg-left">
                  <i className="fa-solid fa-compass-drafting"></i>
                  <h3 className="mt-3 wrapservice__title">{t('graphicDesigner')}</h3>
                  <p>{t('graphicDesignerDescription')}</p>
                </div>
                <div className="wrapservice keen-slider__slide text-center text-lg-left">
                  <i className="fa-solid fa-cubes"></i>
                  <h3 className="mt-3 wrapservice__title">{t('webDeveloper')}</h3>
                  <p>{t('webDeveloperDescription')}</p>
                </div>
                <div className="wrapservice keen-slider__slide text-center text-lg-left">
                  <i className="fa-solid fa-cubes"></i>
                  <h3 className="mt-3 wrapservice__title">{t('androidApplicationDeveloper')}</h3>
                  <p>{t('androidApplicationDeveloperDescription')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffffff" fillOpacity="1" d="M0,96L60,117.3C120,139,240,181,360,197.3C480,213,600,203,720,186.7C840,171,960,149,1080,160C1200,171,1320,213,1380,234.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
        </svg>
      </div>
      <div id="portfoliosection" className="sectionblock">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              {/* filter portfolio */}
              <div className="warpfilter text-left">
                <ul id="filterwrap" className="warpfilter__filter justify-content-left text-center text-lg-left">
                  <li data-group="all" className="active">{t('all')}</li>
                  <li data-group="web">{t('webDesign')}</li>
                  <li data-group="branding">{t('app')}</li>
                </ul>
              </div>
              {/* end filter portfolio */}
              <div id="porfoliowarp" className="grid-gutter-md grid-col-3">
                {/*  PORFOLIO ITEM */}
                <div className="porfoliowarp__item" data-groups='["branding"]'>
                  <a className="porfoliowarp__portolink glightbox" data-glightbox="type: image" href="src/assets/portfolio/shibarium.jpg">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/shibarium.jpg) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                {/*  PORFOLIO ITEM */}
                <div className="porfoliowarp__item" data-groups='["web"]'>
                  <a className="porfoliowarp__portolink glightbox" data-glightbox="type: image" href="src/assets/portfolio/Odontologia.jpg">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/Odontologia.jpg) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                {/*  PORFOLIO ITEM */}
                <div className="porfoliowarp__item" data-groups='["branding"]'>
                  <a className="porfoliowarp__portolink glightboxvideo" data-glightbox="type: image" href="src/assets/portfolio/Web.jpg">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/Web.jpg) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                                {/*  PORFOLIO ITEM */}
                                <div className="porfoliowarp__item" data-groups='["branding"]'>
                  <a className="porfoliowarp__portolink glightbox" data-glightbox="type: image" href="src/assets/portfolio/slugs.jpg">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/slugs.jpg) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                {/*  PORFOLIO ITEM */}
                <div className="porfoliowarp__item" data-groups='["web"]'>
                  <a className="porfoliowarp__portolink glightbox" data-glightbox="type: image" href="src/assets/portfolio/Jugos.png">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/Jugos.png) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                {/*  PORFOLIO ITEM */}
                <div className="porfoliowarp__item" data-groups='["branding"]'>
                  <a className="porfoliowarp__portolink glightboxvideo" data-glightbox="type: image" href="src/assets/portfolio/Bigpoppa.png">
                    <i className="fa-solid fa-circle-plus"></i>
                    <div className="porfoliowarp__content" style={{ background: "url(src/assets/portfolio/Bigpoppa.png) no-repeat center", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                  </a>
                </div>
                {/* END PORTFOLIO ITEM */}
                {/* Include the rest of your portfolio items here */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end portfolio section */}
    </main>
  );
}

function Footer() {
  const { t } = useTranslation(); // Hook useTranslation para acceder a las traducciones

  return (
    <footer id="footerwrap" className="footer-padding-top">
      {/* footer */}
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center text-xl-left">
            <div className="footerwrap__content">
              <div className="row">
                <div className="col-lg-3">
                  <div className="footerwrap__about">
                    <img src="src/assets/page/LOGO WEB-02.png" alt="logoweb" className="img-fluid" />
                    <p className="mt-4">{t('weAreATeam')}</p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footerwrap__links">
                    <h5>{t('quickLinks')}</h5>
                    <ul>
                      <li><a href="#sectionhero">{t('home')}</a></li>
                      <li><a href="#aboutsection">{t('aboutMe')}</a></li>
                      <li><a href="#servicesection">{t('services')}</a></li>
                      <li><a href="#portfoliosection">{t('portfolioLink')}</a></li>
                      <li><a href="#contactsection">{t('contactLink')}</a></li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footerwrap__contact">
                    <h5>{t('contactInfo')}</h5>
                    <p>
                      <i className="fa fa-envelope"></i> {t('email')}
                    </p>
                    <p>
                      <i className="fa fa-phone"></i> {t('phoneNumberText')}
                    </p>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="footerwrap__social">
                    <h5>{t('followMe')}</h5>
                    <ul>
                      <li><a href="#!">Facebook</a></li>
                      <li><a href="#!">Twitter</a></li>
                      <li><a href="#!">Instagram</a></li>
                      <li><a href="#!">Binance</a></li> {/* Nombre de Binance */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end footer */}
      <div className="text-center">
        <p>&copy; {t('rightsReserved')}</p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <>
      <Header />
      <MainWrap />
      <Service />
      <Footer />
    </>
  );
}

export default App;
