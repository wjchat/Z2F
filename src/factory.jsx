//roc farms ting
//add info as the very last thing!!!!

import React from 'react';
import ReactDOM from 'react-dom';
import "./roc.scss";
import factory from "./img/factory.svg";
import farmMap from "./img/China.png";
import {TweenLite, Back} from 'gsap';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
 
const Factory = ({ image }) => (
  <LazyLoadImage
    alt={'shirt'}
    effect="blur"
    src={factory} />
);
const China = ({ image }) => (
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
                <h3>Huafang Textiles</h3>
                <p>Lu’an City, China <br />
                 1328 Employees
                </p>
                <div className = "img">
                    <Factory /> 
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
                <h1>Huafang Textiles</h1>
                <p className = "description">Huafang Textiles is a factory that processes raw materials and spins them into fabrics. These fabrics are washed and sent to a nearby facility to be turned into clothing. </p>
                <div className = "table">
                    <div className = "firstRow">
                        <div>
                            <p>Parent Company</p> 
                            <p>Anhui Cosmo</p> 
                        </div>                        
                        <div>
                            <p>Facility Type</p>
                            <p>Finished goods</p>
                        </div>
                    </div>                    
                    <div className = "secondRow">
                        <div>
                            <p>Employees</p>
                            <p>1328</p>
                        </div>                        
                        <div>
                            <p>Female</p>
                            <p>48%</p>
                        </div>                        
                        <div>
                            <p>Migrant</p>
                            <p>37%</p>
                        </div>                        
                        <div>
                            <p>Average Age</p>
                            <p>29</p>
                        </div>
                    </div>
                    <div className = "thirdRow">
                        <div>Address</div>
                        <div>Economic Development Zone, <br />
                            Jinzhai County Lu’an City, <br />
                            China</div>
                    </div>
                </div>
                <div className = "image">
                    <China />
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