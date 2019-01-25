import React from 'react';
import ReactDom from 'react-dom';

import IntroSection from './components/intro-section';
import AboutSection from './components/about-section';
import WorkSection from './components/work-section';

ReactDom.render(
  <div>
    <IntroSection />
    <AboutSection />
    <WorkSection />
  </div>,
  document.getElementById('root')
);
