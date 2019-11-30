import React, { Component } from 'react';
import axios from 'axios';
import "./Barrier.scss";
class Barrier extends Component {
    state = {
        data: null,
        loadingData: false
    }
    async componentDidMount() {
        try {
            const response = await axios.get("http://localhost:9999/api/dw/barrier")
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
                        <div className="right-block__top">
                            <div className="right-block__top-description">
                                <div className="description-model">Модель</div>
                                <div className="description-price">42 150 руб</div>
                            </div>
                            <div className="right-block__bottom-description">
                                <div className="description-model">STR-02SNQE</div>
                                <div className="description-button">Скачать описание</div>
                            </div>
                        </div>
                        <div className="right-block__bottom">
                            <div className="wrapper-select">
                                <div className="onoffswitch">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch-checkbox" id="header-checkbox"/>
                                    <label className="onoffswitch-label" htmlFor="header-checkbox">
                                        <span className="onoffswitch-inner"></span>
                                        <span className="onoffswitch-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Универсальный сетевой контроллер EP-2000</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch2">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch2-checkbox" id="header2-checkbox"/>
                                    <label className="onoffswitch2-label" htmlFor="header2-checkbox">
                                        <span className="onoffswitch2-inner"></span>
                                        <span className="onoffswitch2-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">RFID идентификаторы EMMarin 125 kHz</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch3">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch3-checkbox" id="header3-checkbox"/>
                                    <label className="onoffswitch3-label" htmlFor="header3-checkbox">
                                        <span className="onoffswitch3-inner"></span>
                                        <span className="onoffswitch3-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">RFID идентификаторы Mifare 13,56 MHz</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch4">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch4-checkbox" id="header4-checkbox"/>
                                    <label className="onoffswitch4-label" htmlFor="header4-checkbox">
                                        <span className="onoffswitch4-inner"></span>
                                        <span className="onoffswitch4-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Биометрическая идентификация по отпечаткам пальцев</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch5">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch5-checkbox" id="header5-checkbox"/>
                                    <label className="onoffswitch5-label" htmlFor="header5-checkbox">
                                        <span className="onoffswitch5-inner"></span>
                                        <span className="onoffswitch5-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Информационный дисплей учета рабочего времени</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch6">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch6-checkbox" id="header6-checkbox"/>
                                    <label className="onoffswitch6-label" htmlFor="header6-checkbox">
                                        <span className="onoffswitch6-inner"></span>
                                        <span className="onoffswitch6-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Контроль разовых посещений 2D штрих-коды</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch7">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch7-checkbox" id="header7-checkbox"/>
                                    <label className="onoffswitch7-label" htmlFor="header7-checkbox">
                                        <span className="onoffswitch7-inner"></span>
                                        <span className="onoffswitch7-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Гостевой доступ по 2D штрих-кодам</div>
                            </div>
                            <div className="wrapper-select">
                                <div className="onoffswitch8">
                                    <input type="checkbox" name="onoffswitch" className="onoffswitch8-checkbox" id="header8-checkbox"/>
                                    <label className="onoffswitch8-label" htmlFor="header8-checkbox">
                                        <span className="onoffswitch8-inner"></span>
                                        <span className="onoffswitch8-switch"></span>
                                    </label>
                                </div>
                                <div className="right-block__select-description">Корпус кожуха из нержавеющей стали</div>    
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}
export default Barrier;