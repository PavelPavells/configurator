import React, { Component } from 'react';
import axios from 'axios';
import "./Turnstille.scss";
class Turnstille extends Component {
    state = {
        data: null,
        loadingData: false
    }
    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:9999/api/dw/main")
                        .then(response => response.json())
                    .then(() => {
                console.log(response);
            })
            .catch(err => console.log(err));
        } catch (error) {
           console.log("Не удалось обратиться на сервер " + error); 
        }
    }
    render() {
        return(
            <div className="wrapper-main">
                <p className="main-description">Мастер подбора конфигурации оборудования</p>
                <div className="wrapper-main-content">

            {/**                     CENTRAL BLOCK                        */}

                    <div className="wrapper-left-block__turnstille">
                        <div className="block">
                            <div className="wrapper-left__top__block">
                                <div className="left-top-block__photo"></div>
                                <div className="left-top-block__description">
                                    Компактные турникеты серии "STR"
                                </div>
                            </div>
                            <div className="wrapper-right__top__block">
                                <div className="right-top-block__photo"></div>
                                <div className="right-top-block__description">
                                    Тумбовые турникеты серии "STR"
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="wrapper-left__bottom__block">
                                <div className="left-bottom-block__photo"></div>
                                <div className="left-bottom-block__description">
                                    Тумбовые турникеты серии "STX"
                                </div>
                            </div>
                            <div className="wrapper-right__bottom__block">
                                <div className="right-bottom-block__photo"></div>
                                <div className="right-bottom-block__description">
                                    Тумбовые турникеты серии "STX"
                                </div>
                            </div>
                        </div>
                    </div>

            {/**                     CENTRAL BLOCK                        */}

                    <div className="wrapper-center-block__turnstille">
                        <div className="center-block__top">
                            <div className="center-block__photo"></div>
                        </div>
                        <div className="center-block__carousel">
                            <div className="arrow-left"></div>
                            <div>1</div>
                            <div>2</div>
                            <div>3</div>
                            <div>4</div>
                            <div>5</div>
                            <div className="arrow-right"></div>
                        </div>
                        <div className="center-block__bottom">
                            <div className="center-block__description">Комплектация:</div>
                            <div className="center-block__list">
                                <ul className="list">
                                    <li>Базовая модель</li>
                                    <li>Модель ER-01</li>
                                    <li>Модуль EP-2000</li>
                                </ul>
                                <ul className="list-price">
                                    <li>42 150 руб.</li>
                                    <li>2 100 руб.</li>
                                    <li>6 590 руб.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

            {/**                     RIGHT BLOCK                        */}

                    <div className="wrapper-right-block__turnstille">
                        BLOCK RIGHT
                    </div>

                </div>
            </div>
        )
    }
}
export default Turnstille;