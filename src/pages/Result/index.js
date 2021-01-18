import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Kart from '../../assets/kart.svg'
import Compass from '../../assets/compass.svg'
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
            <div className="Home-containerResult">
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
                            <span>Você tem espírito de empreendedor!</span>
                            <br></br>

                            <label>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod <br/> tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, <br/>quis nostrud exercitation ullamco <br/> laboris nisi ut aliquip ex ea commodo consequat.</label>
                        </div>
                        <div className="P02">
                            <img src={Compass} />
                        </div>
                    </div>
                    <div className="Buttonss1">
                        
                        <Link id="NExt" to="/map02">Continue sua jornada</Link>
                    </div>

                </div>

            </div>
        );
    }
}
export default AutoComponent;