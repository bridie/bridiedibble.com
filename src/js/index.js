import React from 'react';
import ReactDom from 'react-dom';

import IntroSection from './components/intro-section';
import AboutSection from './components/about-section';

ReactDom.render(
  <div>
    <IntroSection />
    <AboutSection />
  </div>,
  document.getElementById('root')
);
