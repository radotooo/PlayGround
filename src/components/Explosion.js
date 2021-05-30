import { Container, Graphics, Sprite } from 'pixi.js';
import gsap from 'gsap';
import { random } from 'gsap/gsap-core';

export default class Explosion extends Container {
  constructor() {
    super();
    this._circles = [];
    this._init();
  }

  _init() {
    this._createCircle();
    this._createMultiple();
  }

  _createMultiple() {
    for (let i = 0; i < 20; i++) {
      const circle = this._createCircle();
      this._circles.push(circle);
    }
  }

  _createCircle() {
    const dot = new Graphics();
    dot.beginFill(0xff0000);
    dot.drawCircle(0, 0, 20);
    dot.endFill();
    dot.alpha = 0; 
    this.addChild(dot);
    
    return dot;
  }
    
  animate() {
    gsap.to(this._circles, {
      alpha: 1,
      x: random(100, 200),
      y: random(100, 200),
      duration: 1
    });
  }
}