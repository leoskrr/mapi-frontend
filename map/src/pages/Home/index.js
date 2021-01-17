import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './style.css';
import Camel  from '../../assets/camel.svg'
import Star from '../../assets/star.svg'


class HomeComponent extends Component {
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
                <div className="Home-container">
                    <div className="Top">

                    </div>
                    <div className="Middle">
                    <img className="Start" src={Star} alt="Camel"></img>
                    </div>
                    <div className="Enter-Middle">

                    </div>
                   <div className="Footer">
                       <img src={Camel} alt="Camel"></img>
                   </div>
                </div>
            );
    }
}
export default HomeComponent;