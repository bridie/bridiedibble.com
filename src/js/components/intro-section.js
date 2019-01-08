import React, { Component } from 'react';

import Dots from './dots';

class IntroSection extends Component {
  render() {
    return (
      <div className="l-section l-section--intro">
      <Dots />
      <div>
        <div className="c-hero-text">Hello. I'm <span>Bridie Dibble</span></div>
        <br />
        <div className="c-hero-text">I'm a <span>full-stack web developer</span></div>
      </div>
      </div>
    );
  }
}

export default IntroSection;
