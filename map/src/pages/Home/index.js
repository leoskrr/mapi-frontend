import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Camel from '../../assets/camel.svg'
import Star from '../../assets/star.svg'
import Button from '../../components/Button'
import Kart from '../../assets/kart.svg'
import Typewriter from 'typewriter-effect/dist/core';
class HomeComponent extends Component {
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
    goLogin(){
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
                            <a href="">
                                Entrar
                            </a>
                        </div>
                    </div>
                </div>
                <div className="Middle">
                    <img className="Start" src={Star} alt="Camel"></img>
                    <h1 id="app">Comece a sua jornada</h1>
                </div>
                <div className="Enter-Middle">
                    <Button ></Button>
                </div>
                <div className="Footer">
                    <img src={Camel} alt="Camel"></img>
                </div>
            </div>
        );
    }
}
export default HomeComponent;