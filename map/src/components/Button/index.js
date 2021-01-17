import React, { Component } from 'react';
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
    render() {
        return (
            <div  className="Button-Container">
               Vamos lá!
            </div>
        );
    }
}
export default Button;