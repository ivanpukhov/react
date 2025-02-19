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
import React, { useState } from "react";
import { Modal, Button } from "antd";

const Footer = (products) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAddress, setSelectedAddress] = useState(null);

    const addresses = [
        {
            address: "ТРЦ Green Mall, ул. Сыганак 17 (ЖК Зелёный Квартал), 1 этаж, вход со стороны Magnum.",
            phone: "+7702 674 8797"
        },
        { address: "ТРЦ Аружан, ул. Жансугурулы, 8/1, 1 этаж, напротив Magnum.", phone: "+7775 445 8936" },
        { address: "ТРЦ Азия парк, проспект Кабанбай батыра, 21, 1 этаж, бутик А2.", phone: "+7707 708 6220" },
        { address: "ЖК Expo Boulevard-3, проспект Кабанбай батыра, 58Б, 1к.", phone: "+7778 163 0257" },
        { address: "ЖК Parasat, проспект Туран, 44Б.", phone: "+7702 058 1667" },
        { address: "ТЦ Тумар, Улица Сыганак, 1Б, 1 этаж, бутик А9.", phone: "+7 775 593 3060" },
        { address: "ТРЦ Хан Шатыр, проспект Туран, 37, Цокольный этаж, Паркинг.", phone: "+7 708 802 4110" },
        { address: "ЖК Гранд Туран, 43/3.", phone: "+7 777 770 0161" }
    ];

    const showModal = (address) => {
        setSelectedAddress(address);
        setIsModalOpen(true);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setSelectedAddress(null);
    };

    return (
        <>
            <BarMobile />
            <footer className="footer">
                <div className="pcfooter">
                    <div className="pcfooter__content">
                        <div className="pcfooter__about">
                            <div className="pcfooter__logo">
                                <img src={logo} alt="mikos.kz" />
                            </div>
                            <div className="pcfooter__social">
                                <div className="pcfooter__icon">
                                    <img src={whatsappIcon} alt="" />
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={instaIcon} alt="" />
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={facebookIcon} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="pcfooter__info">
                            <div className="pcfooter__title-info">Информация</div>
                            <div className="pcfooter__info-text">
                                <div className="pcfooter__info-item">Политика безопасности</div>
                                <div className="pcfooter__info-item">Условия соглашения</div>
                                <div className="pcfooter__info-item">Информация о доставке</div>
                                <div className="pcfooter__info-item">О нас</div>
                            </div>
                        </div>
                        <div className="pcfooter__contacts">
                            <div className="pcfooter__title-contacts">Контакты</div>
                            <div className="pcfooter__contacts-block">
                                {addresses.map((item, index) => (
                                    <div key={index} className="pcfooter__contacts-item" onClick={() => showModal(item)}>
                                        <div className="pcfooter__contacts-icon">
                                            <img src={geoIcon} alt="" />
                                        </div>
                                        <div className="pcfooter__contacts-text">{item.address}</div>
                                    </div>
                                ))}
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
                                <img src={logo} alt="mikos.kz" />
                            </div>
                            <div className="mbfooter__item">
                                <img src={infoBtn} alt="" />
                            </div>
                            <div className="mbfooter__item">
                                <img src={contactsBtn} alt="" />
                            </div>
                            <div className="pcfooter__social">
                                <div className="pcfooter__icon">
                                    <img src={whatsappIcon} alt="" />
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={instaIcon} alt="" />
                                </div>
                                <div className="pcfooter__icon">
                                    <img src={facebookIcon} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            {/* Модальное окно */}
            <Modal
                title="Информация о месте"
                open={isModalOpen}
                onCancel={handleCancel}
                footer={[
                    <Button key="close" onClick={handleCancel}>
                        Закрыть
                    </Button>,
                    selectedAddress && (
                        <Button key="call" type="primary">
                            <a href={`tel:${selectedAddress.phone}`} style={{ color: "white" }}>Позвонить</a>
                        </Button>
                    )
                ]}
            >
                {selectedAddress && (
                    <>
                        <p><strong>Адрес:</strong> {selectedAddress.address}</p>
                        <p><strong>Телефон:</strong> {selectedAddress.phone}</p>
                    </>
                )}
            </Modal>
        </>
    );
};

export default Footer;
