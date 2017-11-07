import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import UUID from 'node-uuid';

const styles = require('./SkippedBrownBag.scss');

class SkippedBrownBag extends React.Component {
  constructor(props){
    super(props);

    this.listSkippedCandidates = this.listSkippedCandidates.bind(this);
  }

  listSkippedCandidates(candidates) {
    const listSkippedCandidates = candidates.map((candidate)=>
      <li key={UUID.v4()}>
        <img
        className="avatar"
        src={candidate.profile.avatar}
        alt="user image not found"/>
        <div className="user-info">
          <h5>{candidate.username}</h5>
          <span>skipped Brown Bag last week</span>
          <span>27 jan - 20 mar</span>
        </div>
      </li>
    );
    return listSkippedCandidates;
  }

  render(){
    return (
      <div className={styles.skippedBrownBag}>
        <ul className={styles.skippedList}>
          {this.listSkippedCandidates(this.props.skipped_brownbag_list)}
        </ul>
      </div>
    );
  }
}
SkippedBrownBag.propTypes = {
  skipped_brownbag_list: PropTypes.array
};

function mapStateToProps(state, ownProps){
  return {
    skipped_brownbag_list: Object.assign([], state.brownbag.skipped)
  };
}
export default connect(mapStateToProps)(SkippedBrownBag);
