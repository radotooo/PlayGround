import { Container, Graphics, Sprite } from 'pixi.js';
import gsap from 'gsap';
import { random } from 'gsap/gsap-core';

import { PixiPlugin } from 'gsap/PixiPlugin';

// register the plugin
gsap.registerPlugin(PixiPlugin);
export default class Explosion extends Container {
  constructor() {
    super();
    this._circles = [];
    this._init();
    
  }

  _init() {
    this._createCircle();
    this._createMultiple();
    this.setTimer();
  }

  setTimer() {

    this.timeout = setTimeout(async ()=>{
      await this.pulsate(this._circles[Math.floor(Math.random() * 3)]);
      this.setTimer(); 
    }, 2000);
  }

  async pulsate(x) {
    gsap.to(x, {
      pixi: {
        scale: 1.5
      },
      duration: 1,
      repeat: 1,
      yoyo: true
    });
  }

  _createMultiple() {
    for (let i = 0; i < 3; i++) {
      const circle = this._createCircle();
      circle.on(`click`, ()=>{
        this._circles.forEach((x)=>{
          if (x === circle) {
            this.animate(x); 
          } else { this.animate2(x); }
        });
        clearTimeout(this.timeout);
        // this.animate(circle);
      });

      circle.buttonMode = true;
      circle.interactive = true;
      circle.x = Math.random() * 100;
      circle.y = Math.random() * 100;
      this.addChild(circle);
      this._circles.push(circle);
    }
  }

  _createCircle() {
    const dot = new Graphics();
    dot.beginFill(0xff0000);
    dot.drawCircle(0, 0, 20);
    dot.endFill();
    dot.alpha = 1; 
    
    return dot;
  }
    
  animate(circle) {
    
    gsap.to(circle, {
     
      x: random(-100, 200),
      y: random(-100, 200),
      duration: 1
    });
  }
  
  animate2(x) {
    gsap.to(x, {
      
      x: random(100, 200),
      y: random(100, 200),
      
      duration: 3
    });
  }
}