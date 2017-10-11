import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import UUID from 'node-uuid';
import * as actions from '../../redux/actions/modalActions';
import { Button, Glyphicon, Modal } from 'react-bootstrap';
import modalTypes from '../../enums/modalTypes';

const styles = require('./PreviousBrownBag.scss');

class PreviousBrownBag extends React.Component {
  constructor(props) {
    super(props);
    this.listPreviousCandidates = this.listPreviousCandidates.bind(this);

    this.state = {
      selectedUser : {
        user: {
          username: ''
        }
      }
    };
  }
  
  handleClick = (user) => {
    this.props.showModal();
    this.setState({
      selectedUser: user
    });
  }

  handleConfirm = () => {
    this.handleModalCancel();
  }

  handleModalCancel = () => {
    this.props.hideModal();
  }

  listPreviousCandidates(candidates) {
   return (
     candidates.map((candidate) =>
      <li key={UUID.v4()}>
        <img
          className="avatar"
          src={candidate.user.profile.avatar}
          alt="user image not found"/>
          <span>{candidate.user.username}</span>
          <Button className={styles.okCircle} onClick={() => this.handleClick(candidate)}>
            {/* This is a quick fix I still don't understand why onclick is being invoked on initial load  */}
            <Glyphicon glyph="ok-circle" />
          </Button>
      </li>
    ));
  }

  render() {
    const show = this.props.modal === modalTypes.REMOVE_USER;
    return (
      <div className={styles.previousBrownBag}>
        <h5>Previous Brown Bags</h5>
        <span className={styles.date}>27 Jan - 20 Mar</span>
        <ul className={styles.previousList}>
          {this.listPreviousCandidates(this.props.previous_candidates_list)}
        </ul>
        <Modal
          show={show}
          onHide={this.handleModalCancel}
        >
          <Modal.Header closeButton>
            <Modal.Title>Remove user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <span>{`Are you sure do you want to remove ${this.state.selectedUser.user.username}`}</span>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleConfirm}>OK</Button>
            <Button onClick={this.handleModalCancel}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

PreviousBrownBag.propTypes = {
  previous_candidates_list: PropTypes.array,
  modal: PropTypes.string,
  showModal: PropTypes.func,
  hideModal: PropTypes.func
};

function mapStateToProps(state, ownProps) {
  return {
    previous_candidates_list: state.previousCandidatesReducer,
    modal: state.modalReducer.modal
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    showModal: () => {
      dispatch(actions.showModal());
    },
    hideModal: () => {
      dispatch(actions.hideModal());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviousBrownBag);
