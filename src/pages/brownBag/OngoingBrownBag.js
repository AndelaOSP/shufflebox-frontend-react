import React from 'react';
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as brownbagActions from '../../redux/actions/brownbagActions';

const styles = require('./OngoingBrownBag.scss');

class OngoingBrownBag extends React.Component {
  constructor(props) {
    super(props);

    this.unpresentedUsers = this.unpresentedUsers.bind(this);
  }

  componentDidMount() {
    this.props.getUnpresentedUsers();
  }

  unpresentedUsers() {
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
          {this.props.users.length > 0 && this.unpresentedUsers()}
        </ul>
      </div>
    );
  }
}

OngoingBrownBag.propTypes = {
  users: PropTypes.array.isRequired,
  getUnpresentedUsers: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    users: state.ongoingCandidatesReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUnpresentedUsers: (user) => {
      dispatch(brownbagActions.getUnpresentedUsers(user));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OngoingBrownBag);
