import React from 'react';
import ReactDOM from 'react-dom';
import './info.scss';
import shirt from './img/Shirt.png';
import resources from './img/Resources.png';
import {TweenLite, TimelineLite} from 'gsap';

class Info extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className = "container">
                <div className = "title">
                    <div className = "lines"></div>
                    <div className = "t">Purple T</div>
                    <div className = "lines"></div>
                </div>
                <div className = "product">
                    <div className = "shirt"><img src = {shirt} /></div>
                    <div className = "info">
                        <ul>
                            <li>ID: #isa8d7a993ad</li>
                            <li>Materials: 40% Polyester, 60% Himilayan Cotton</li>
                            <li>Total Mileage: 203 miles</li>
                            <li>People Involved: 93</li>
                        </ul>
                    </div>
                </div>
                <div className = "line"></div>
                <div className = "resources">
                    <h3>Resources Used</h3>
                    <div className = "imageContainer">
                        <img src = {resources} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Info