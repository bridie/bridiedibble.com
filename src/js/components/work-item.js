import React, { Component } from 'react';

class WorkItem extends Component {
  render() {
    return (
      <a href={this.props.href} target="_blank" className="c-work-grid__item">
        <div className="c-work-grid__overlay">
          <div className="c-work-grid__overlay-text" >Visit Site</div>
        </div>

        <div className="c-work-grid__label">
          <div className="c-block-text c-block-text--tiny c-block-text--alt">{this.props.label}</div>
        </div>

        <img className="c-work-grid__img" src={`./../images/work/${this.props.img}`} />
      </a>
    );
  }
}

export default WorkItem;
