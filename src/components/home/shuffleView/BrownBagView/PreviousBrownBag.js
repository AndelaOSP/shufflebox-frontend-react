import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import UUID from 'node-uuid';
import * as actions from '../../../../actions/confirmModalActions';
import ConfirmModal from '../../../common/ConfirmModal';

class PreviousBrownBag extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.handleModalCancel = this.handleModalCancel.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
    this.listPreviousCandidates = this.listPreviousCandidates.bind(this);
  }
  
 
  handleClick(user) {
    this.props.showModal("Remove user ", user.id);
  }

  handleConfirm() {
    this.handleModalCancel();
  }

  handleModalCancel() {
    this.props.hideModal();
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
            checked
            onClick={() => this.handleClick(candidate)} />
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
        <ConfirmModal onConfirm={this.handleConfirm} onCancel={this.handleModalCancel} />
      </div>
    );
  }
}

PreviousBrownBag.propTypes = {
  previous_candidates_list: PropTypes.array,
  confirm_modal: PropTypes.object,
  showModal: PropTypes.func,
  hideModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    previous_candidates_list: state.previousCandidatesReducer,
    confirm_modal: state.confirmModalReducer
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    showModal: (message, brownbagID) => {
      dispatch(actions.showModal(message, brownbagID));  
    },
    hideModal: () => {
      dispatch(actions.hideModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousBrownBag);
