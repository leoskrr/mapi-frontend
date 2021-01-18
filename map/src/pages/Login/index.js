import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Camel from '../../assets/camel.svg'
import Star from '../../assets/star.svg'
import Button from '../../components/Button'
import Kart from '../../assets/kart.svg'
import Typewriter from 'typewriter-effect/dist/core';
class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consultora: [],
            redirect: false

        }
    }
    async componentDidMount() {
        var app = document.getElementById('app');

        var typewriter = new Typewriter(app, {
            loop: true,
            delay: 75,
        });

        typewriter
            .pauseFor(500)
            .typeString('Comece a sua jornada')
            .pauseFor(300)
            .start();
    }
    showDivs1() {
        console.log('teste')
        document.getElementById("IdLogin").style.display = "flex";
        document.getElementById("CadLogin").style.display = "none";

    }
    showDivs2() {
        document.getElementById("CadLogin").style.display = "flex";
        document.getElementById("CadLogin").style.flexDirection = "column";
        document.getElementById("IdLogin").style.display = "none";
    }
    render() {
        return (
            <div className="Home-container-Login">
                <div className="Top">
                    <div className="Part1">
                        <img className="Start" src={Kart} alt="Kart"></img>
                    </div>
                    <div className="Part2">
                        <div className="Menu1-login">
                            <Link to="/">
                                Home
                            </Link>
                        </div>
                        <div className="Menu2-login">
                            <a href="">
                                Sobre
                            </a>
                        </div>
                        <div className="Menu3-login">
                            <a href="">
                                Entrar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Content-login">
                    <img src={Star} alt="Star"></img>
                    <div className="LoginP1">
                        <h1>Comece a <br></br> sua jornada</h1>
                    </div>
                    <div className="LoginP2">
                        <div className="Login-Container">
                            <div className="Menus">
                                <button onClick={this.showDivs1} id="Login" type="button">Login</button>
                                <button onClick={this.showDivs2} id="Cadastre-se" type="button">Cadastre-se</button>
                            </div>
                            <div id="IdLogin" className="Login-enter">
                                <br></br>
                                <input type="text" id="fname" name="fname" placeholder="e-mail" />
                                <input type="text" id="fname" name="fname" placeholder="senha" />
                                <a href="">Esqueci minha senha</a>
                                <Link id="Entrar"  to="/map01">Entrar</Link>
                            </div>
                            <div id="CadLogin" className="Cadastre-enter">
                                <input type="text" id="fname" name="fname" placeholder="nome usuário" />
                                <input type="text" id="fname" name="fname" placeholder="e-mail" />
                                <input type="text" id="fname" name="fname" placeholder="senha" />
                                <input type="text" id="fname" name="fname" placeholder="confirmar senha" />
                                <button type="button">Vamos lá!</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
export default LoginComponent;