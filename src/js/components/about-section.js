import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <div className="l-section l-section--about">
        <div className="l-heading">
          <h2 class="c-hero-text c-hero-text--alt">About</h2>
        </div>

        <div className="l-section__content">
          <div className="c-copy c-copy--about">
            <p>I am an <span className="c-copy__important-word">enthusiastic</span>, and <span className="c-copy__important-word">passionate</span> <span className="c-copy__important-word">full-stack web developer</span> from Bristol.</p>
            <p>I pride myself on on adhering to <span className="c-copy__important-word">best practices</span>, by writing <span className="c-copy__important-word">elegant</span>, <span className="c-copy__important-word">consistent</span> and <span className="c-copy__important-word">well tested</span> code.</p>
            <p>I enjoy working both collaboratively, and independently to build <span className="c-copy__important-word">beautiful</span>, <span className="c-copy__important-word">user centric</span> web applications with <span className="c-copy__important-word">modern technology stacks</span>.</p>
          </div>

          <div className="l-columns">
            <div className="l-columns__column l-columns__column--left">
              <div className="l-heading">
                <h3 class="c-hero-text c-hero-text--sml">Frontend</h3>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Javascript.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Typescript.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/React.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Redux.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Sass.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Webpack.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>

            <div className="l-columns__column l-columns__column--right">
              <div className="l-heading">
                <h3 class="c-hero-text c-hero-text--sml">Backend</h3>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Php.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Drupal.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Wordpress.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Rest-api.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <img className="c-copy__icon" src="../../images/icons/Amazon.svg" alt="" />
                <p>Lorem ipsum dolor <span className="c-copy__important-word">sit amet</span>, consectetur adipiscing elit, sed do <span className="c-copy__important-word">eiusmod</span> tempor incididunt ut labore et <span className="c-copy__important-word">dolore magna</span> aliqua. Ut enim ad minim veniam.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
