import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import UpcomingBrownBag from './UpcomingBrownBag';
import ShuffleEvents from '../ShuffleEvents';
import OngoingBrownBag from './OngoingBrownBag';
import PreviousBrownBag from './PreviousBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="brownbag-view">
        <div className="left-panel">
          <PreviousBrownBag />
          <UpcomingBrownBag />
          <SkippedBrownBag />
          <ShuffleEvents />
        </div>
        <div className="right-panel">
          <OngoingBrownBag />
        </div>
      </div>
    );
  }
}

export default BrownBag;
