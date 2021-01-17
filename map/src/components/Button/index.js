import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css'
class Button extends Component {
    constructor(props) {
        super(props);

        this.state = {
            consultora: [],
            redirect: false

        }
    }
    async componentDidMount() {

    }
    goLogin(){
        this.replace("/login")
        
    }
    render() {
        return (
            <Link to="/login"  className="Button-Container">
               Vamos lá!
            </Link>
        );
    }
}
export default Button;