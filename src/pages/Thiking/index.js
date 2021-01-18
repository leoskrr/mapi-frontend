import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Kart from '../../assets/kart.svg'
import Cacto from '../../assets/cacto.svg'
class thiComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consultora: [],
            redirect: false

        }
    }
    async componentDidMount() {

    }

    render() {
        return (
            <div className="Home-container-quiz">
                <div className="Top">
                    <div className="Part1">
                        <img className="Start" src={Kart} alt="Kart"></img>
                    </div>
                    <div className="Part2">
                        <div className="Menu1">
                            <a href="">
                                Home
                            </a>
                        </div>
                        <div className="Menu2">
                            <a href="">
                                Sobre
                            </a>
                        </div>
                        <div className="Menu3">
                            <Link to="/login">
                                Entrar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Content-quiz">
                    <div className="TopQuiz1">
                        <div className="Boll1-cheio"></div>
                        <div className="Boll1"></div>
                        <div className="Boll1"></div>
                    </div>

                    <label>Marque as alternativas*
                        <br />
                        que você mais se identifica</label>

                    <span id="sp1">*Você pode marcar uma, duas ou nenhuma</span>
                    <div className="Question1">
                        <input type="checkbox" id="scales" name="scales" />
                        <span>Estou preparado para assumir riscos.</span>
                    </div>
                    <div className="Question1">
                        <input type="checkbox" id="scales" name="scales" />
                        <span>Estou ligado em tudo o que acontece. Leio revistas, ouço pessoas e tudo que possa mostrar uma oportunidade de negócio.</span>
                    </div>
                    <div className="Cntrol">
                        <Link to="/quiz02">Avançar</Link>
                    </div>
                </div>


            </div>
        );
    }
}
export default thiComponent;