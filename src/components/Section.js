import React from 'react';
import Universal1 from "./img/universal1.png";
import Universal2 from "./img/universal2.png";
import Medilab from "./img/medilab.jpg";


function Section(props) {

    const cardioImg = "https://cardiojizzax.uz/img/operatsiya.jpg";
    const umeetSchool = "https://www.umiit.uz/img/umeet-classroombig2.jpg";
    const tarmoqKengashi = "https://tarmoq-kengashi.netlify.app/images/left-bg.png";

    return (
        <section id="section">
            <h2>Портфолио</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mb-5 mb-sm-0">
                            <img className="image" src={cardioImg} alt="png" />
                            <div className="box">
                                <p>Cardio Jizzax</p>
                                <a className="link" href="https://cardiojizzax.uz/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mb-5 mb-sm-0">
                            <img className="image" src={umeetSchool} alt="png" />
                            <div className="box">
                                <p>Umeet School</p>
                                <a className="link" href="https://umiit.uz/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-sm-5 m-md-0">
                        <img className="image" src={Universal1} alt="png" />
                            <div className="box">
                                <p>Universal 1</p>
                                <a className="link" href="https://react-universal.netlify.app" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                        <img className="image" src={Universal2} alt="png" />
                            <div className="box">
                                <p>Universal 2</p>
                                <a className="link" href="https://react-universal-2.netlify.app" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                            <img className="image" src={tarmoqKengashi} alt="png" />
                            <div className="box">
                                <p>Tarmoq kengashi</p>
                                <a className="link" href="https://tarmoq-kengashi.netlify.app" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-6 col-8">
                        <div className="blok mt-5">
                            <img className="image" src={Medilab} alt="png" />
                            <div className="box">
                                <p>Medilab</p>
                                <a className="link" href="https://medilab-project.netlify.app/" target="_blank">посмотреть</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;