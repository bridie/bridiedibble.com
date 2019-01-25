import React, { Component } from 'react';

class FooterSection extends Component {
  render() {
    return (
      <div className="l-section l-section--footer">
        <div className="l-section__content">

          <div className="contact">
            <a className="contact__link" href="mailto:bridie.dibble@gmail.com">
              Email
            </a>

            <span className="contact__div">/</span>

            <a className="contact__link" href="https://www.linkedin.com/in/bridie-dibble/">
              LinkedIn
            </a>

            <span className="contact__div">/</span>

            <a className="contact__link" href="https://github.com/bridie">
              Github
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default FooterSection;
