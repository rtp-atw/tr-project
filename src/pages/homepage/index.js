import React, { Component } from 'react';
import Button from "../../components/button";
import './style.scss';

export default class HomePage extends Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Button text={'My button'}/>
            </div>
        )
    }
}