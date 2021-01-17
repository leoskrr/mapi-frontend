import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Kart from '../../assets/kart.svg'
import Cacto from '../../assets/cacto.svg'
import Back from '../../assets/Vector 262.svg'
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
                        <div className="Boll1"></div>
                        <div className="Boll1-cheio"></div>
                        <div className="Boll1"></div>
                    </div>

                    <label>Marque as alternativas*
                        <br />
                        que você mais se identifica</label>

                    <span id="sp1">*Você pode marcar uma, duas ou nenhuma</span>
                    <div className="Question1">
                        <input type="checkbox" id="scales" name="scales" />
                        <span>Sou determinado, sei onde e como chegar.</span>
                    </div>
                    <div className="Question1">
                        <input type="checkbox" id="scales" name="scales" />
                        <span>Estou atento para tudo o que ainda não existe ou que ainda precisa ser feito no mercado de trabalho.</span>
                    </div>
                    <div className="Cntrol-p2">
                        <Link id="Back" to="/quiz01"><img src={Back}/></Link>
                        <Link to="/quiz03">Avançar</Link>
                    </div>
                </div>


            </div>
        );
    }
}
export default thiComponent;