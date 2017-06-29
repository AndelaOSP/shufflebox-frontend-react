import React from 'react';
import SkippedBrownBag from './SkippedBrownBag';
import ShuffleEvents from '../ShuffleEvents';
import OnListBrownBag from './OnListBrownBag';

class BrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="brownbag-view">
        <SkippedBrownBag />
        <ShuffleEvents />
        <OnListBrownBag />
      </div>
    );
  }
}

export default BrownBag;
