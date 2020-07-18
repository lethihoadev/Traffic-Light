import React, { Component } from 'react';
import './TrafficLight.css';
import classNames from 'classnames';

const RED = 0;
const ORANGE = 1;
const GREEN = 2;

class TrafficLight extends Component {
    constructor() {
        super();
        this.state = {
            currrentColor: ORANGE
        };

        setInterval(() => {
            this.setState({
                currrentColor: this.getNextColor(this.state.currrentColor)
            });
        }, 1000);
    }

    getNextColor(color) {
        switch (color) {
            case RED:
                return ORANGE;
            case ORANGE:
                return GREEN;
            default:
                return RED;
        }
    }

    render() {
        const { currrentColor } = this.state;
        console.log('Rendering...', currrentColor);
        return <div className = "TrafficLight" >
            <div className = { classNames('bulb', 'red', { active: currrentColor === RED }) }/>  
            <div className = { classNames('bulb', 'orange', { active: currrentColor === ORANGE }) }/>  
            <div className = { classNames('bulb', 'green', { active: currrentColor === GREEN }) }/>  
            </div>
    }
}

export default TrafficLight;