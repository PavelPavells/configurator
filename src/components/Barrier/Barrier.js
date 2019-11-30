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
                <div className="wrapper-main">
                    
                </div>
            </div>
        )
    }
}
export default Barrier;