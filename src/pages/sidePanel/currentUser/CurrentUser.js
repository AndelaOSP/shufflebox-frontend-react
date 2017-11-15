import React from 'react';
import { getUser } from '../../../redux/reducers/userReducer';
import { connect } from 'react-redux';

const styles = require('./CurrentUser.scss');

class CurrentUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    const { user } = this.props;
    return (
      <div className={styles.user}>
        <img
          className={styles.userAvatar}
          src={user.userInfo.picture}
          alt="user image not found"/>
        <span>What is your next event?</span>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const user = getUser(state);
  return {
    user
  };
}
export default connect(mapStateToProps)(CurrentUser);
