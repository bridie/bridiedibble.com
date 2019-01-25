import React, { Component } from 'react';

class FooterSection extends Component {
  render() {
    return (
      <div className="l-section l-section--footer">
        <div className="l-section__content">

          <div className="c-contact">
            <a className="c-contact__link" href="mailto:bridie.dibble@gmail.com">
              Email
            </a>

            <span className="c-contact__div">/</span>

            <a className="c-contact__link" href="https://www.linkedin.com/in/bridie-dibble/">
              LinkedIn
            </a>

            <span className="c-contact__div">/</span>

            <a className="c-contact__link" href="https://github.com/bridie">
              Github
            </a>
          </div>

        </div>
      </div>
    );
  }
}

export default FooterSection;
