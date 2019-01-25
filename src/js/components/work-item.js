import React, { Component } from 'react';

class WorkItem extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" className="work-grid__item">
        <div className="work-grid__overlay">
          <div className="work-grid__overlay-text" >Visit Site</div>
        </div>

        <div className="work-grid__label">
          <div className="c-hero-text c-hero-text--tiny c-hero-text--alt">{this.props.label}</div>
        </div>

        <img className="work-grid__img" src={`./../images/work/${this.props.img}`} />
      </a>
    );
  }
}

export default WorkItem;
