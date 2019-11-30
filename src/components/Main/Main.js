import React, { Component } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import "./Main.scss";
class Main extends Component {
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
        return (
            <div className="wrapper-main">
                <p className="main-description">Мастер подбора конфигурации оборудования</p>
                <div className="wrapper-main-content">
                    <div className="wrapper-left-block">
                        <p className="left-block-description">
                            Шлагбаумы для парковок и стоянок
                        </p>
                        <NavLink exact activeClassName="link-barrier" to="/barrier">
                            <div className="left-block-image">
                                <div className="image">
                                    {/** PHOTO */}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                    <div className="wrapper-right-block">
                        <p className="right-block-description">
                            Турникеты для контроля доступа
                        </p>
                        <NavLink exact activeClassName="link-turnstille" to="/turnstille">
                            <div className="right-block-image">
                                <div className="image">
                                    {/** PHOTO */}
                                </div>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        )
    }
}
export default Main;