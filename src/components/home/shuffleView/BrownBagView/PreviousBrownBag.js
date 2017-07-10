import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import UUID from 'node-uuid';

class PreviousBrownBag extends React.Component {
  constructor(props) {
    super(props);

    this.listPreviousCandidates = this.listPreviousCandidates.bind(this);
  }
  
 
  listPreviousCandidates(candidates) {
    const listPreviousCandidates = candidates.map((candidate) => 
      <li key={UUID.v4()} className="mdl-list__item">
        <span className="mdl-list__item-primary-content">
        <img
          className="avatar"
          src={candidate.user.profile.avatar}
          alt="user image not found"/>
          <span>{candidate.user.username}</span>
        </span>
        <span className="mdl-list__item-secondary-action">
          <label 
          className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" 
          htmlFor="list-checkbox-1">
            <input 
            type="checkbox" 
            id="list-checkbox-1" 
            className="mdl-checkbox__input" 
            checked />
          </label>
        </span>
      </li>
    );
    return listPreviousCandidates;   
  }

  render() {
    return (
      <div className="previous-brown-bag">
        <div className="title">
          <h6>Previous Brownbag</h6>
          <span className="mdl-list__item-sub-title">27 jan</span>
        </div>
        <ul className="mdl-list">
          {this.listPreviousCandidates(this.props.previous_candidates_list)}
        </ul>
      </div>
    );
  }
}

PreviousBrownBag.propTypes = {
  previous_candidates_list: PropTypes.array
};

function mapStateToProps(state, ownProps) {
  return {
    previous_candidates_list: state.previousCandidatesReducer
  };
}

export default connect(mapStateToProps)(PreviousBrownBag);
