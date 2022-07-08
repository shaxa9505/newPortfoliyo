import React from 'react';
import Logo from "./images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Toggle } from '../redux/reducers';

function Header(props) {

    const { toggle } = useSelector(state => state);
    const dispatch = useDispatch();

    return (
        <header id="header">
            <div className="header_top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="offset-lg-1 col-lg-3 col-md-2 col-sm-3 col-3">
                            <img className="logo" src={Logo} alt="png" />
                        </div>
                        <div className="col-lg-7 col-md-8 col-sm-6 col-6">
                            <nav className={`d-none d-md-block`}>
                                <ul className="d-flex align-items-center m-0 list-unstyled">
                                    <li><a href="#header">Главная</a></li>
                                    <li><a href="#main">Мои Навыки</a></li>
                                    <li><a href="#section">Портфолио</a></li>
                                    <li><a href="#menu">Обо мне</a></li>
                                    <li><a href="#footer">Контакт</a></li>
                                </ul>
                            </nav>

                            <nav className="d-block d-md-none nav">
                                {toggle ? <i onClick={() => dispatch(Toggle())} className="fa fa-times"></i> : <i onClick={() => dispatch(Toggle())} className="fa fa-bars"></i>}
                                {toggle ? <ul className="m-0 list-unstyled">
                                    <li><a href="#header">Главная</a></li>
                                    <li><a href="#main">Мои Навыки</a></li>
                                    <li><a href="#section">Портфолио</a></li>
                                    <li><a href="#menu">Обо мне</a></li>
                                    <li><a href="#footer">Контакт</a></li>
                                </ul> : null}

                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row text-center mar_top">
                    <div className="col-lg-12">
                        <p>Привет, меня зовут Шохрух и я</p>
                        <h1>Веб разработчик</h1>
                        <span>Создаю современные и гибкие веб сайты</span>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;