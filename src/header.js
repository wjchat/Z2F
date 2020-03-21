import React from 'react';
import ReactDOM from 'react-dom';
import './header.scss';
import { TweenLite, TimelineLite } from 'gsap';

class Header extends React.Component{
    constructor(props){
        super(props);
        this.turnInfo = this.turnInfo.bind(this);
        this.turnJourney = this.turnJourney.bind(this);
        this.state ={
            showInfo: this.props.infoUp,
        };
        this.bottomLine = null;
        this.info = null;
        this.journey = null;
    }
    turnInfo(){
        this.props.onClick(true);
        this.setState({
            showInfo: true,
        });
    }    
    turnJourney(){
        this.props.onClick(false);
        this.setState({
            showInfo: false,
        });
    } 
    componentDidUpdate(){
        if(this.props.updating){
            this.myTween = TweenLite.from(this.info.children, .2, {width:0, x: 25, delay: 0});
            this.myTween = TweenLite.from(this.journey.children, .2, {width:0, x: -25, delay: 0});
    }
    }
    render(){
        return(
            <div className ={"nav " + this.props.zIndex}>
                <div className ="leon container" onClick = {this.turnInfo}>Leon Ryn
                    <div className = "border"></div>
                </div>
                <div className = "container"></div>
                <div className = "container">
                    <div ref = {div => this.info = div} onClick = {this.turnInfo}>
                        Info
                        {this.state.showInfo ? <div ref = {div => this.bottomLine = div} className = "borderBottom"></div>: ''}
                    </div>
                    
                    <div ref = {div => this.journey = div} onClick = {this.turnJourney}>
                        Journey
                    {!this.state.showInfo ? <div ref = {div => this.bottomLine = div} className = "borderBottom"></div>: ''}
                    </div>
                </div>
            </div>
        )
    }
}

export default Header