import React from 'react';

function Main2(props) {
    return (
        <div className="main">
            <h2>Что вы получите</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-8">
                        <div className="cadr">
                            <div className="box">
                                <i className="fa fa-mobile"></i>
                                <div className="text">Адаптив</div>
                                <p>Полностью функцинальны на любых устройствах</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-8">
                        <div className="cadr">
                            <div className="box">
                                <i className="fa fa-cog fa-fw"></i>
                                <div className="text">Кросс-браузерный</div>
                                <p>Работают не только на последних версиях браузеров, благодаря методу разработки и используемым туль-китам</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-8">
                        <div className="cadr">
                            <div className="box">
                                <i className="fa fa-android"></i>
                                <div className="text">Современный</div>
                                <p>Верстка соответсвует новым трендам</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-8">
                        <div className="cadr">
                            <div className="box">
                                <i className="fa fa-clock-o"></i>
                                <div className="text">Всегда в срок</div>
                                <p>Соблюдение сроков - один из важнейших факторов в моей работе</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main2;