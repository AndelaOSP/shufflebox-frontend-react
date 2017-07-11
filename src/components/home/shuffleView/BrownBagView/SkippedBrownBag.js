import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import UUID from 'node-uuid';

class SkippedBrownBag extends React.Component {
  constructor(props){
    super(props);

    this.listSkippedCandidates = this.listSkippedCandidates.bind(this);
  }

  listSkippedCandidates(candidates) {
    const listSkippedCandidates = candidates.map((candidate)=>
      <li key={UUID.v4()} className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
          <img
          className="avatar"
          src={candidate.profile.avatar}
          alt="user image not found"/>
          <div className="user-info">
            <span>{candidate.username}</span>
            <span className="mdl-list__item-sub-title">27 jan - 20 mar</span>
          </div>
        </span>
      </li>
    );
    return listSkippedCandidates;
  }

  render(){
    return (
      <div className="skipped-brown-bag">
        <ul className="mdl-list">
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
    skipped_brownbag_list: state.skippedCandidatesReducer
  };
}
export default connect(mapStateToProps)(SkippedBrownBag);
