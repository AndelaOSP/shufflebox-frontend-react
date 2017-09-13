import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as brownbagActions from '../../../../actions/brownbagActions';

class OngoingBrownBag extends React.Component {
  constructor(props) {
    super(props);

    this.unpresentedUsers = this.unpresentedUsers.bind(this);
  }

  componentDidMount() {
    this.props.getUnpresentedUsers();
  }

  unpresentedUsers() {
    return (
      this.props.users.map((user, index) => 
      <li key = {index} className="mdl-list__item mdl-list__item--two-line">
        <span className="mdl-list__item-primary-content">
          <img
          className="avatar"
          src={user.profile.avatar}
          alt="user image not found"/>
          <div className="user-info">
            <span>{`${user.first_name} ${user.last_name}`}</span>
          </div>
        </span>
      </li>
      )
    );
  }

  render() {
    return (
      <div className="onlist-brown-bag">
        <div className="onlist-title">
          <span>WHO'S ON THE LIST</span>
        </div>
        <ul className="mdl-list">
          {this.unpresentedUsers()}
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
