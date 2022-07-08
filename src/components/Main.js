import React from 'react';
import Html from "./images/html.png";
import Css from "./images/css.png";
import JavaScript from "./images/javaScript.jpg";
import react from "./images/react.jpg";
import Redux from "./images/redux.png";
import Git from "./images/git.png";
import Boot from "./images/boot.png";
import Github from "./images/github.png";

function Main(props) {
    return (
        <main id="main">
            <h2>Мои Навыки</h2>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <img className="skills mar_bot" src={Html} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <img className="skills mar_bot" src={Css} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <p>Bootstrap</p>
                        <img className="skills mar_bot" src={Boot} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <p>Git</p>
                        <img className="skills mar_bot" src={Git} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <p>Github</p>
                        <img className="skills mr_bot" src={Github} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <img className="skills mr_bot" src={JavaScript} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <img className="skills mr_bot" src={react} alt="png" />
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-4 col-7">
                        <p>Redux</p>
                        <img className="skills" src={Redux} alt="png" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Main;