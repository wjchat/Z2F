//roc farms ting
//add info as the very last thing!!!!

import React from 'react';
import ReactDOM from 'react-dom';
import "./roc.scss";
import farm from "./img/barn.svg";
import farmMap from "./img/Uzbek.png";
import {TweenLite, Back} from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const Farm = ({ image }) => (
  <LazyLoadImage
    alt={'shirt'}
    effect="blur"
    src={farm} />
);
const Map = ({ image }) => (
  <LazyLoadImage
    alt={'shirt'}
    effect="blur"
    src={farmMap} />
);

class UnClicked extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick = () =>{
        this.props.onClick();
    }
    render(){
        return(
            <div onClick = {this.handleClick} className = "box">
                <h3>Roc Farms</h3>
                <p>Kiva, Uzbekistan <br />
                   245 Employees
                </p>
                <div className = "img">
                    <Farm /> 
                </div>
            </div>
        )
    }
}
class Clicked extends React.Component{
    constructor(props){
        super(props);
        this.height = null;
    }
    handleClick = () =>{
        this.tween = TweenLite.to(this.height, .1, {
            opacity: 0,
        })
        this.props.onClick();
    }
    componentDidMount(){
        setTimeout(
            function(){
                const divHeight = this.height.getBoundingClientRect().height;
                this.props.getHeight(divHeight);       
            }
            .bind(this), 200
        )
    }
    render(){
        return(
            <div ref = {div => this.height = div} className = "clickedContainer">
                <div onClick = {this.handleClick} className = "x">X</div>
                <h1>Roc Farms</h1>
                <p className = "description">Roc farms is where the cotton was sourced for this product. Roc farm grows a number of raw materials for the textile industry. </p>
                <div className = "table">
                    <div className = "firstRow">
                        <div>
                            <p>Parent Company</p> 
                            <p>Silverstar</p> 
                        </div>                        
                        <div>
                            <p>Facility Type</p>
                            <p>Material</p>
                        </div>
                    </div>                    
                    <div className = "secondRow">
                        <div>
                            <p>Employees</p>
                            <p>842</p>
                        </div>                        
                        <div>
                            <p>Female</p>
                            <p>22%</p>
                        </div>                        
                        <div>
                            <p>Migrant</p>
                            <p>48%</p>
                        </div>                        
                        <div>
                            <p>Average Age</p>
                            <p>38</p>
                        </div>
                    </div>
                    <div className = "thirdRow">
                        <div>Address</div>
                        <div>31 Mosteralia Str, PTL <br />
                            Samagreio-Zemo SVA 4400, <br />
                            Kiva, Uzbekistan</div>
                    </div>
                </div>
                <div className = "image">
                    <Map />
                </div>
            </div>
        )
    }
}

class Container extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            expanded: false,
        };
        this.fadeBox = null;
        this.shadowBox = null;
        this.element = null;
        this.height = null;
        this.divHeight = null;
        this.scrollPosition = null;
        this.tween = null;
        this.tween2 = null;
        this.tween3 = null;
        this.tween1 = null;
        this.windowY = null;
    }
    getHeight = (divHeight) =>{
        this.divHeight = divHeight;
        this.scrollPosition = window.scrollY;;
        this.props.overLay(true,divHeight, this.scrollPosition);
    }
    open = () =>{
        this.windowY = window.scrollY;
        this.height = window.innerHeight;
        this.tween = TweenLite.to(this.shadowBox, .1,{ 
            zIndex: 300,
            backgroundColor: 'rgba(255,255,255,1)',
        });
        this.tween3 = TweenLite.to(this.fadeBox, .1, {opacity:0});
        
        this.element = this.shadowBox.getBoundingClientRect();
        this.tween1 = TweenLite.to(this.shadowBox, .2,{
            height: this.height,
            width: '100%',
            borderColor: 'rgba(255,255,255,0)',
            boxShadow: '0 1px 3px rgba(0,0,0,0), 0 1px 2px rgba(0,0,0,0)',
            borderRadius: '0px',
            paddingTop: '4%',
            y:  -1 * (this.element.top + this.windowY),
            bottom: 0,
            delay: .12,
            ease: Back.easeIn,
        });
        setTimeout(
            function() {
                this.props.zIndex(0);
            }
            .bind(this), 220
        );
        //alert(this.element.top);
        setTimeout(
            function() {
                this.setState({
                expanded: !this.state.expanded,
                });
            }
            .bind(this), 140
        );
       this.tween2 = TweenLite.to(this.fadeBox, .1, {opacity:1, delay: .35});
    }
    close = () =>{
        
        //this.tween3 = TweenLite.to(this.fadeBox, .05, {opacity:0});
        setTimeout(
            function() {
                this.tween1.reverse();
                window.scrollTo(0, this.windowY);
                this.props.zIndex(1);
            }
            .bind(this), 100
        )
        setTimeout(
            function() {
                this.setState({
                expanded: !this.state.expanded,
                }); 
            }
            .bind(this), 330
        )
        this.tween2 = TweenLite.to(this.fadeBox, .1, {opacity:1, delay: .34});
        this.props.overLay(false, 0, 0);
        this.tween.reverse();
    }
    render(){
        return(
            <div ref = {div => this.shadowBox = div} className = "shadowContainer">
                <div ref = {div => this.fadeBox = div} className = {this.state.expanded ? "clickedYa":"unClickedYa"}>
                    {this.state.expanded ? <Clicked getHeight = {this.getHeight} onClick = {this.close} />: <UnClicked onClick = {this.open} />}
                </div>
            </div>
        )
    }
}

export default Container;