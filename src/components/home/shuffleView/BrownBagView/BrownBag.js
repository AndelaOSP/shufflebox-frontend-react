import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import ShuffleEvents from '../ShuffleEvents';
import OngoingBrownBag from './OngoingBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="brownbag-view">
        <SkippedBrownBag />
        <ShuffleEvents />
        <OngoingBrownBag />
      </div>
    );
  }
}

export default BrownBag;
