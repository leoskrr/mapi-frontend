import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Camel from '../../assets/camel.svg'
import Star from '../../assets/star.svg'
import Button from '../../components/Button'
import Kart from '../../assets/kart.svg'
import Typewriter from 'typewriter-effect/dist/core';
import Map1 from '../../assets/map1.svg'
class MapComponent extends Component {
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
                            <Link to="">
                                Sobre
                            </Link>
                        </div>
                        <div className="Menu3-login">
                            <Link to="/login">
                                Entrar
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="Map-Container">
                    <img src={Map1}/>
                </div>
                <div className="Map-Next">
                    <Link to="/quiz01">
                        Ir
                    </Link>
                </div>

            </div>
        );
    }
}
export default MapComponent;