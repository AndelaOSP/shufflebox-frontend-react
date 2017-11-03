import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as brownbagActions from '../../redux/actions/brownbagActions';

const styles = require('./OngoingBrownBag.scss');

class OngoingBrownBag extends React.Component {
  constructor(props) {
    super(props);

    this.potentialCandidates = this.potentialCandidates.bind(this);
  }

  componentDidMount() {
    this.props.getPotentialCandidates();
  }

  potentialCandidates() {
    let truncatedUsers = this.props.users;
    truncatedUsers.shift();
    truncatedUsers.length = 6;  //hack to get the first 6 users
    return (
      truncatedUsers.map((user, index) =>
      <li key = {index}>
        <img
          className="avatar"
          src={user.profile.avatar || 'https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg?sz=50'}
          alt="user image not found"/>
        <span className={styles.userInfo}>{`${user.first_name} ${user.last_name}`}</span>
      </li>
      )
    );
  }

  render() {
    return (
      <div className={styles.onlistBrownBag}>
        <span>WHO'S ON THE LIST</span>
        <ul className={styles.onList}>
          {this.props.users.length > 0 && this.potentialCandidates()}
        </ul>
      </div>
    );
  }
}

OngoingBrownBag.propTypes = {
  users: PropTypes.array.isRequired,
  getPotentialCandidates: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: Object.assign([], state.brownbag.ongoing)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getPotentialCandidates: (user) => {
      dispatch(brownbagActions.getPotentialCandidates(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OngoingBrownBag);
