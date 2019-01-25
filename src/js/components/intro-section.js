import React, { Component } from 'react';
import { Link } from "react-scroll";
import Dots from './dots';

class IntroSection extends Component {
  render() {
    return (
      <div id="intro-section" className="l-section l-section--intro">
      <Dots />
      <div>
        <div className="c-block-text">Hello. I'm <span>Bridie Dibble</span></div>
        <br />
        <div className="c-block-text">I'm a <span>full-stack web developer</span></div>
        <br />
        <Link to="about-section" spy={true} smooth={true} offset={-70} duration={500}>
          <div className="c-block-text c-block-text--alt c-block-text--sml">About</div>
        </Link>
        <Link to="work-section" spy={true} smooth={true} offset={-70} duration={500}>
          <div className="c-block-text c-block-text--alt c-block-text--sml">Work</div>
        </Link>
      </div>
      </div>
    );
  }
}

export default IntroSection;
