import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Header from './header.js';
import Info from './info.js'
import Journey from "./journey.jsx"
import { TweenLite, TimelineLite, Cubic } from 'gsap';

import farmMap from './img/Uzbek.png';
import China from './img/China.png';
import NYC from './img/NewYork.png';


class Frame extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showInfo: true,
            updating: true,
        };
        
        this.frame = null;
        this.body = null;
        this.handleClick = this.handleClick.bind(this);
    }
   handleClick(i){
        this.tween = TweenLite.to(this.body, .1, {opacity: 0, scale: .98, ease: Cubic.easeIn});
        setTimeout(
            function() {
                this.setState({
                    showInfo: i,
                    updating: false,
                    zIndex: 'one',
                });
                }
                .bind(this),
                100
            );
        this.setState({
            updating: true,
        })
        this.tween = TweenLite.to(this.body, .1, {opacity: 1, scale: 1, delay:.2, ease: Cubic.easeIn});
    }
    componentDidMount(){    
        this.tween = TweenLite.from(this.frame, .4, {opacity: 0});

        const img = new Image();
        img.src = farmMap;    
        
        const img2 = new Image();
        img2.src = China;        
        
        const img3 = new Image();
        img3.src = NYC;
    } 
    zIndex = (i) =>{
        if(i === 1){
            this.setState({
                zIndex: 'one',
            });
        }else{
            this.setState({
                zIndex: 'zero',
            })
        }
    }
    render(){
        return(
        <div ref = {div => this.frame = div} className = "frame">
            <Header zIndex = {this.state.zIndex} onClick = {this.handleClick} infoUp = {this.state.showInfo} updating = {this.state.updating}/>
            <div ref = {div => this.body = div} className = "bodyI">
                {this.state.showInfo ? <Info /> : <Journey zIndex = {this.zIndex} />}
            </div>
        </div>
        );
    }
}


// ========================================

ReactDOM.render(
  <Frame />,
  document.getElementById('root')
);
