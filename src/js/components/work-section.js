import React, { Component } from 'react';
import WorkGrid from './work-grid';

class WorkSection extends Component {
  render() {
    return (
      <div className="l-section l-section--work">
        <div className="l-heading">
          <h2 className="c-hero-text">Work</h2>
        </div>

        <div className="l-section__content">
          <WorkGrid />
        </div>
      </div>
    );
  }
}

export default WorkSection;
