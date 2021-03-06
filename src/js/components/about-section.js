import React, { Component } from 'react';

class AboutSection extends Component {
  render() {
    return (
      <div id="about-section" className="l-section l-section--about">
        <div className="l-heading">
          <h2 className="c-block-text c-block-text--alt">About</h2>
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
                <h3 className="c-block-text c-block-text--sml">Frontend</h3>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">JavaScript</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Javascript.svg" alt="" />
                <p>I typically use <span className="c-copy__important-word">Babel</span> to compile my JS, so that the <span className="c-copy__important-word">latest language features</span> can be used, with <span className="c-copy__important-word">full browser support</span>. JavaScript is a <span className="c-copy__important-word">passion</span> of mine, and as such I am a <span className="c-copy__important-word">regular attendee of JS meetups and conferences.</span></p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">TypeScript</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Typescript.svg" alt="" />
                <p>I <span className="c-copy__important-word">enjoy</span> using TypeScript for <span className="c-copy__important-word">mid to large projects</span> as it makes code more <span className="c-copy__important-word">predictable</span>, <span className="c-copy__important-word">readable</span> and <span className="c-copy__important-word">robust</span>, and as a VSCode user, a <span className="c-copy__important-word">nice development experience</span>.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">React</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/React.svg" alt="" />
                <p>When building <span className="c-copy__important-word">dynamic frontend user interfaces</span>, React is an <span className="c-copy__important-word">absolute dream</span> to work with, being able to use <span className="c-copy__important-word">self-contained UI components</span>, that render based on <span className="c-copy__important-word">component state</span>, and have <span className="c-copy__important-word">unidirectional data flow</span> is invaluable to creating <span className="c-copy__important-word">reusable</span>, <span className="c-copy__important-word">predictable</span> and <span className="c-copy__important-word">maintainable</span> code. And with JSX, it’s incredibly <span className="c-copy__important-word">easy to read</span>.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">Redux</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Redux.svg" alt="" />
                <p>Redux works <span className="c-copy__important-word">seamlessly with React</span> to provide a <span className="c-copy__important-word">predictable state data flow</span>, over multiple components, making your application more <span className="c-copy__important-word">predictable</span>, <span className="c-copy__important-word">maintainable</span> and <span className="c-copy__important-word">testable</span>.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">BEM & SMACSS</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Sass.svg" alt="" />
                <p>BEM and SMACSS is a <span className="c-copy__important-word">paradigm shift</span> bringing <span className="c-copy__important-word">structure</span> to CSS. The use of <span className="c-copy__important-word">modularity</span> and <span className="c-copy__important-word">encapsulation</span> creates <span className="c-copy__important-word">reusable</span>, <span className="c-copy__important-word">maintainable</span> and <span className="c-copy__important-word">consistent</span> frontend user interfaces.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">Webpack</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Webpack.svg" alt="" />
                <p>Webpack is an incredibly <span className="c-copy__important-word">powerful tool</span>, by writing very <span className="c-copy__important-word">little configuration</span> you can <span className="c-copy__important-word">achieve a lot</span>. Not only can you easily achieve a <span className="c-copy__important-word">more performant</span> web application, the development experience <span className="c-copy__important-word">feels elegant</span>, with the use of the <span className="c-copy__important-word">hot module reloading</span>.</p>
              </div>
            </div>

            <div className="l-columns__column l-columns__column--right">
              <div className="l-heading">
                <h3 className="c-block-text c-block-text--sml">Backend</h3>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">PHP</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Php.svg" alt="" />
                <p><span className="c-copy__important-word">Designed specifically</span> for the web, PHP is <span className="c-copy__important-word">quick</span>, <span className="c-copy__important-word">easy</span>, <span className="c-copy__important-word">scalable</span>, <span className="c-copy__important-word">flexible</span>, <span className="c-copy__important-word">compatible</span> and has a <span className="c-copy__important-word">large community</span>. PHP gets a lot of slack, however with the <span className="c-copy__important-word">PHP Standard Recommendation</span>, and resources such as <span className="c-copy__important-word"><a href="">PHP: The Right Way</a></span>, it is becoming standard practice to follow <span className="c-copy__important-word">best practices</span> and <span className="c-copy__important-word">proven concepts.</span></p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">Drupal</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Drupal.svg" alt="" />
                <p>A <span className="c-copy__important-word">flexible</span>, <span className="c-copy__important-word">reliable</span>, <span className="c-copy__important-word">extendable</span> and <span className="c-copy__important-word">secure</span> CMS with a huge <span className="c-copy__important-word">dedicated community</span>. It makes building <span className="c-copy__important-word">complex</span> web applications <span className="c-copy__important-word">quick</span> and <span className="c-copy__important-word">easy</span>. The most recent version of Drupal makes use of <span className="c-copy__important-word">Symfony components</span> where appropriate, which has <span className="c-copy__important-word">modernised</span> the code base considerably.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">WordPress</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Wordpress.svg" alt="" />
                <p>It’s the <span className="c-copy__important-word">most popular</span> CMS for a reason: for a <span className="c-copy__important-word">simple</span>, <span className="c-copy__important-word">content centric</span> website, it’s a good tool. It’s a good tool because it’s <span className="c-copy__important-word">simple</span>, <span className="c-copy__important-word">easily customised</span> and has a <span className="c-copy__important-word">huge community</span>.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">REST API</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Rest-api.svg" alt="" />
                <p>I really enjoy using and making a good REST API that adheres to <span className="c-copy__important-word">best practices</span>, and has <span className="c-copy__important-word">good documentation</span>. A good REST API is not only <span className="c-copy__important-word">functional</span>, <span className="c-copy__important-word">secure</span> and <span className="c-copy__important-word">performant</span>, but also <span className="c-copy__important-word">pleasant</span> and <span className="c-copy__important-word">intuitive</span> to use.</p>
              </div>

              <div className="c-copy c-copy--sml c-copy--icon-box">
                <div className="c-copy__overlay">
                  <div className="c-copy__overlay-text">AWS</div>
                </div>
                <img className="c-copy__icon" src="../../images/icons/Amazon.svg" alt="" />
                <p>AWS allows web developers, like me, to be able to access <span className="c-copy__important-word">complex</span>, <span className="c-copy__important-word">powerful</span> web service features <span className="c-copy__important-word">easily</span>. The <span className="c-copy__important-word">flexibility</span> and <span className="c-copy__important-word">integration</span> is incredible, along with a convenient and <span className="c-copy__important-word">good value</span> pay as you go price.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutSection;
