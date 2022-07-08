import React from 'react';

function Footer(props) {
    return (
        <footer id="footer">
            <h2>Контакт</h2>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="block">
                            <div className="icon">
                                <i className="fa fa-user"></i>
                                <p className="user">Мелибоев Шохрух</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-map-marker"></i>
                                <p className="user">город Ташкент, Узбекистан</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-envelope"></i>
                                <p className="user">shohruxmeliboyev9505@gmail.com</p>
                            </div>
                            <div className="icon">
                                <i className="fa fa-phone"></i>
                                <p className="user">+998 91 569 95 05</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <div className="block_2">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="row justify-content-between">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <input className="input_1 mb-2" type="text" placeholder="ваше имя" />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <input className="input_1" type="email" placeholder="ваш емайл" />
                                    </div>
                                </div>
                            </div>
                            <input className="input_2" type="text" placeholder="тема" />
                            <textarea className="tex" placeholder="опишите тему"></textarea>
                            <button id="send">Отправить</button>
                        </div>
                    </div>
                </div>
            </div>
            <p className="foot_bot"><i className="fa fa-star-half"></i>
                PRO-STAR
                <i className="fa fa-star-half"></i>
            </p>
            <span>2021</span>
        </footer>
    );
}

export default Footer;