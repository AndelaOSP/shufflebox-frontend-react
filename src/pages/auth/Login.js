import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import logIn from '../../redux/actions/loginActions';
import { getUser } from '../../redux/reducers/userReducer';
import { Alert } from 'react-bootstrap';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      isInvalidToken: false
    };
  }

  componentWillMount() {
    this.props.logIn();
  }

  render = () => {
    const { user } = this.props;
    if (user.loggedIn) {
      return <Redirect to="/shuffle/brownbag" />;
    }

    if (user.validationErrors === 'Invalid email') {
      <Alert bsStyle="warning">
        <strong>Ooops Invalid email</strong>
        {user.userInfo.email}
      </Alert>;
      return <Redirect to="/" />;
    } else {
      return <div />;
    }
  };
}

function mapStateToProps(state) {
  const user = getUser(state);
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      logIn
    },
    dispatch,
  );
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  user: PropTypes.shape({
    userInfo: PropTypes.shape({
      email: PropTypes.string,
      first_name: PropTypes.string,
      id: PropTypes.string,
      last_name: PropTypes.string,
      picture: PropTypes.string,
      roles: PropTypes.any
    }).isRequired,
    loggedIn: PropTypes.bool.isRequired,
    validationErrors: PropTypes.bool.isRequired
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
