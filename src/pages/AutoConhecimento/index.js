import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Kart from '../../assets/kart.svg'
import Cacto from '../../assets/cacto.svg'
class AutoComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consultora: [],
            redirect: false

        }
    }
    async componentDidMount() {

    }
    goLogin() {
        console.log('oi')
    }
    render() {
        return (
            <div className="Home-container">
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
                <div className="Container-auto">
                    <div className="Total">
                        <div className="P01">
                            <span>Autoconhecimento</span>
                            <br></br>

                            <h3>Teste: Como está seu perfil empreendedor?</h3>
                            <label>
                                Na primeira etapa do [nome], queremos que você inicie sua jornada para o empreendedorismo e geração de renda com uma reflexão.</label>
                        </div>
                        <div className="P02">
                            <img src={Cacto} />
                        </div>
                    </div>
                    <div className="Buttonss">
                        <button type="button">Quero compreender!</button>
                        <button type="button">Começar depois</button>
                    </div>

                </div>

            </div>
        );
    }
}
export default AutoComponent;