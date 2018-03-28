import React from 'react';
import IFrame from 'react-iframe';

export default class LifeCycleCodepen extends React.Component {
  render() {
    return(
      <div className="main">
        <div className="mainDiv">
          <IFrame url='https://codepen.io/eduardoboucas/full/jqWbdb/' height="800px" width="1200"/>
        </div>
      </div>
    )
  }
}