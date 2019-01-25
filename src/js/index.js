import React from 'react';
import ReactDom from 'react-dom';

import IntroSection from './components/intro-section';
import AboutSection from './components/about-section';
import WorkSection from './components/work-section';
import FooterSection from './components/footer-section';

ReactDom.render(
  <div>
    <IntroSection />
    <AboutSection />
    <WorkSection />
    <FooterSection />
  </div>,
  document.getElementById('root')
);
