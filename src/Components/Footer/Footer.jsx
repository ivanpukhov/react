import logo from "../../assets/img/logo.svg";
import whatsappIcon from "../../assets/img/footer/whatsapp-icon.svg";
import instaIcon from "../../assets/img/footer/insta-icon.svg";
import facebookIcon from "../../assets/img/footer/facebook-icon.svg";
import geoIcon from "../../assets/img/footer/geo-icon.svg";
import phoneIcon from "../../assets/img/footer/phone-icon.svg";
import mailIcon from "../../assets/img/footer/mail-icon.svg";
import contactsBtn from "../../assets/img/footer/contactsBtn.svg";
import infoBtn from "../../assets/img/footer/infoBtn.svg";
import './Footer.css'
import BarMobile from "../BarMobile/BarMobile";
import React from "react";

const Footer = (products) => {
    return (
        <>
            <BarMobile/>
            <footer className="footer">
                <div className="pcfooter">
                    <div className="pcfooter__content">
                        <div className="pcfooter__about">
                            <div className="pcfooter__logo">
                                <img src={logo} alt="mikos.kz"/>
                            </div>
                            <div className="pcfooter__social">
                                <div className="pcfooter__icon">
                                    <img src={whatsappIcon} alt=""/>
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={instaIcon} alt=""/>

                                </div>
                                <div className="pcfooter__icon">
                                    <img src={facebookIcon} alt=""/>

                                </div>
                            </div>
                        </div>
                        <div className="pcfooter__info">
                            <div className="pcfooter__title-info">Информация</div>
                            <div className="pcfooter__info-text">
                                <div className="pcfooter__info-item"> Политика безопасности</div>
                                <div className="pcfooter__info-item"> Условия соглашения</div>
                                <div className="pcfooter__info-item"> Информация о доставке</div>
                                <div className="pcfooter__info-item">О нас</div>
                            </div>
                        </div>
                        <div className="pcfooter__contacts">
                            <div className="pcfooter__title-contacts">Контакты</div>
                            <div className="pcfooter__contacts-block">
                                <div className="pcfooter__contacts-item">
                                    <div className="pcfooter__contacts-icon">
                                        <img src={geoIcon} alt=""/>
                                    </div>
                                    <div className="pcfooter__contacts-text">Астана, ТРЦ «Green Mall», ул. Е-10, 17Б, 1
                                        этаж, бутик 31/1
                                    </div>
                                </div>
                                <div className="pcfooter__contacts-item">
                                    <div className="pcfooter__contacts-icon">
                                        <img src={mailIcon} alt=""/>

                                    </div>
                                    <div className="pcfooter__contacts-text"><a
                                        href="mailto:Nursultan@mikos.kz">Nursultan@mikos.kz</a></div>
                                </div>
                                <div className="pcfooter__contacts-item">
                                    <div className="pcfooter__contacts-icon">
                                        <img src={phoneIcon} alt=""/>

                                    </div>
                                    <div className="pcfooter__contacts-text"><a href="tel:+7 (702) 674-87-97">+7 (702)
                                        674-87-97</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pcfooter__copy">
                        <div className="pcfooter__copy-item">
                            Mikos.kz Астана - корейская косметика, корейские товары, продукты питания

                        </div>
                        <div className="pcfooter__copy-item">
                            Все права защищены <a href="https://instagram.com/ix_web">IX WEB</a> © 2023

                        </div>

                    </div>
                </div>
                <div className="footer__mobile">
                    <div className="pcfooter__content">
                        <div className="pcfooter__about">
                            <div className="pcfooter__logo">
                                <img src={logo} alt="mikos.kz"/>
                            </div>
                            <div className="mbfooter__item">
                                <img src={infoBtn} alt=""/>

                            </div>
                            <div className="mbfooter__item">
                                <img src={contactsBtn} alt=""/>


                            </div>
                            <div className="pcfooter__social">
                                <div className="pcfooter__icon">
                                    <img src={whatsappIcon} alt=""/>
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={instaIcon} alt=""/>

                                </div>
                                <div className="pcfooter__icon">
                                    <img src={facebookIcon} alt=""/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </footer>
        </>

    )
}

export default Footer
