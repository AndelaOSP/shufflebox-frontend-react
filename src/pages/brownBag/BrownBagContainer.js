import React from 'react';
import PropTypes from "prop-types";
import SidePanel from '../sidePanel/SidePanel';
import BrownBag from './BrownBag';
import VisitorBrownBag from './VisitorBrownBag';
import OngoingBrownBag from './OngoingBrownBag';
import {connect} from 'react-redux';

const styles = require('./BrownBagContainer.scss');

class BrownBagContainer extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className={styles.brownBagContainer}>
        <BrownBag />
        <div className={styles.rightPanel}>
          <OngoingBrownBag />
          <VisitorBrownBag />
        </div>
      </div>
    );
  }
}

BrownBagContainer.propTypes = {
  brownbag: PropTypes.array
};

export default BrownBagContainer;
