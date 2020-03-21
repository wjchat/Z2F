import React from 'react';
import ReactDOM from 'react-dom';
import Roc from './roc.jsx';
import Factory from "./factory.jsx"
import Store from "./store.jsx"
import "./journey.scss";
import arrow from "./img/arrow.svg";
import TweenLite from 'gsap';

class Journey extends React.Component{
    constructor(props){
        super(props);
        this.overlay = null;
        this.tween = null;
    }
    needOverlay = (need, height, pos) => {
        if(need){
            this.tween = TweenLite.to(this.overlay, 0,
                {
                overflow: 'hidden',
                height: height,
                top: 0,
                zIndex:2.
            });
            console.log(pos + "ok");
        }else{
            this.tween = TweenLite.to(this.overlay,0,{
                overflow:"visible",
                height: 'inherit',
                top: 0,
                zindex:0,
            });
            
        }
    }
    render(){
        return(
            <div className = "containerJ">
                <div ref = {div => this.overlay = div} className = "overlay">
                    <div className = "description1">Each of our products required many hands to make. From farm to shelf, Leon Ryn shows you the journey this piece took in getting to you. </div>
                    <div className = "rocContainer">
                        <Roc
                            zIndex = {this.props.zIndex}
                            overLay = {this.needOverlay} />
                        <div className = "arrow">
                            <img src = {arrow} />
                        </div> 
                        <Factory 
                            zIndex = {this.props.zIndex}
                            overLay = {this.needOverlay} />
                        <div className = "arrow">
                            <img src = {arrow} />
                        </div> 
                        <Store zIndex = {this.props.zIndex}
                            overLay = {this.needOverlay}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Journey 