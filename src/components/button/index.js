import React, { Component } from 'react';
import './style.scss';

export default class Button extends Component {

    render() {

        return (
            <div>
                <button>{this.props.text}</button>
            </div>
        )
    }
}