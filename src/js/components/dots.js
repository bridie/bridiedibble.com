import React, { Component } from 'react';
import * as PIXI from 'pixi.js';

import DotsEmitter from './../dots-emitter';

class Dots extends Component {
  constructor(props) {
    super(props);

    this.pixiApp = null;
    this.spawnPos = this.generateSpawnPos();
    this.emitters = [];
  }

  componentDidMount() {
    this.pixiInit();
    this.emitDots();
    window.addEventListener('resize', this.onResize.bind(this));
  }

  render() {
    return <canvas className="c-dots js-dots" />;
  }

  pixiInit() {
    this.pixiApp = new PIXI.Application({
      width: document.body.clientWidth,
      height: window.innerHeight,
      transparent: true,
      antialias: true,
      view: document.getElementsByClassName('js-dots')[0]
    });
  }

  emitDots() {
    this.emitters = this.spawnPos.map(pos => new DotsEmitter(this.pixiApp.stage, { x: pos[0], y: pos[1] }));
    this.emitters.forEach(emitter => emitter.start());
  }

  onResize() {
    this.spawnPos = this.generateSpawnPos();
    this.pixiApp.renderer.resize(document.body.clientWidth, window.innerHeight);
    this.emitters.forEach((emitter, i) => emitter.emitter.updateSpawnPos(this.spawnPos[i][0], this.spawnPos[i][1]));
  }

  generateSpawnPos() {
    return [
      [document.body.clientWidth - 300, window.innerHeight - 300],
      [300, window.innerHeight - 300],
      [300, 300],
      [document.body.clientWidth - 300, 300]
    ];
  }
}

export default Dots;
