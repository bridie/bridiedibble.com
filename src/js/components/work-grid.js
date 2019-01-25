import React, { Component } from 'react';
import WorkItem from './work-item';

class WorkGrid extends Component {
  render() {
    return (
      <div className="c-work-grid">
        <WorkItem
          href='https://shaunthesheep.com'
          label="Shaun the Sheep"
          img="shaunthesheep.png"
        />

        <WorkItem
          href='https://www.aardman.com'
          label="Aardman"
          img="aardman.png"
        />

        <WorkItem
          href='https://d48xll9gigrmr.cloudfront.net/index.html'
          label="Timmy's Music Box"
          img="timmysmusicbox.png"
        />

        <WorkItem
          href='https://amazingmorph.com'
          label="Morph"
          img="amazingmorph.png"
        />

        <WorkItem
          href='https://wallaceandgromit.com'
          label="Wallace & Gromit"
          img="wallaceandgromit.png"
        />

        <WorkItem
          href='https://www.aardman.com/work/gromit-unleashed-2-d-o-g-2-trail-app'
          label="Gromit Unleashed Backend"
          img="gromitunleashed.png"
        />

        <WorkItem
          href='https://travellocal.com'
          label="TravelLocal"
          img="travellocal.png"
        />

        <WorkItem
          href='https://gdsdigital.com'
          label="GDS Digital"
          img="gdsdigital.png"
        />

        <WorkItem
          href='https://gdsepic.com'
          label="GDS Epic"
          img="gdsepic.png"
        />
      </div>
    );
  }
}

export default WorkGrid;
