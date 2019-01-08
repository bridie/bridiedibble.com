import * as PIXI from 'pixi.js';
import 'pixi-particles';

class DotsEmitter {
  constructor(container, position) {
    this.container = container;
    this.position = position;
    this.emitter = null;

    this.dots = [
      PIXI.Texture.fromImage('./../../images/chambray.png'),
      PIXI.Texture.fromImage('./../../images/white.png'),
      PIXI.Texture.fromImage('./../../images/carnation.png'),
      PIXI.Texture.fromImage('./../../images/cloud-burst.png'),
      PIXI.Texture.fromImage('./../../images/marzipan.png')
    ];

    this.config = {
      scale: { start: 0.1, end: 1, minimumScaleMultiplier: 1 },
      speed: { start: 50, end: 10, minimumSpeedMultiplier: 1 },
      startRotation: { min: 0, max: 360 },
      noRotation: false,
      lifetime: { min: 10, max: 20 },
      blendMode: "normal",
      frequency: 0.5,
      emitterLifetime: -1,
      maxParticles: 100,
      pos: { x: this.position.x, y: this.position.y },
      addAtBack: false,
      spawnType: "circle",
      spawnCircle: { x: 20, y: 20, r: 100 }
    }
  }

  start() {
    this.emitter = new PIXI.particles.Emitter(
      this.container,
      this.dots,
      this.config
    );

    let elapsed = Date.now();

    const update = function(){
      requestAnimationFrame(update);
      var now = Date.now();
      this.emitter.update((now - elapsed) * 0.001);
      elapsed = now;
    }.bind(this);

    this.emitter.emit = true;
    update();
  }
}

export default DotsEmitter;
