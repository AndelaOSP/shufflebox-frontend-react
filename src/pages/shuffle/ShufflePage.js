import React from 'react';
import NavTabs from '../../components/navTabs/NavTabs';
import PropTypes from 'prop-types';
import { LinkContainer } from 'react-router-bootstrap';
import { NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import BrownBagContainer from '../brownBag/BrownBagContainer';
import SidePanel from '../sidePanel/SidePanel';
import { Redirect } from 'react-router-dom';
import { getUser } from '../../redux/reducers/userReducer';
import logOut from '../../redux/actions/logOutActions';
import { connect } from 'react-redux';
import SecretSanta from '../secretSanta/secretSanta';

const styles = require('./ShufflePage.scss');

class ShufflePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'brownbag',
      loggedIn: true
    };
  }

  componentWillReceiveProps(nextProps) {
    const groups = /\/(\w+)$/g.exec(nextProps.location.pathname); // get current tab
    this.setState({ tab: groups[1] });
  }

  logOut = () => {
    this.props.logOut();
  };

  render() {
    const { user, match } = this.props;
    const brownBagTab = this.state.tab === 'brownbag';
    const secretSantaTab = this.state.tab === 'secretsanta';
    const hangoutsTab = this.state.tab === 'hangouts';

    if (!user.loggedIn) {
      return <Redirect to="/" />;
    }
    return (
      <div className={styles.shuffleContainer}>
        <SidePanel />
        <div className={styles.tabsContainer}>
          <NavTabs>
            <LinkContainer to={`${match.url}/brownbag`}>
              <NavItem>Brown Bag</NavItem>
            </LinkContainer>
            <LinkContainer to={`${match.url}/secretsanta`}>
              <NavItem href="/secretsanta">Secret Santa</NavItem>
            </LinkContainer>
            <LinkContainer to={`${match.url}/hangouts`}>
              <NavItem href="/hangouts">Hangouts</NavItem>
            </LinkContainer>
            <div className={styles.rightNav}>
              <DropdownButton
                className={styles.rightNavButton}
                title={user.userInfo.first_name}
                id="bg-vertical-dropdown-2"
              >
                <MenuItem eventKey="1" onSelect={this.logOut}>
                  Log out
                </MenuItem>
              </DropdownButton>
            </div>
          </NavTabs>
          <div className={styles.shuffle}>
            <div className={brownBagTab ? styles.brownBag : styles.hide}>
              <BrownBagContainer />
            </div>
            <div className={secretSantaTab ? styles.secretSanta : styles.hide}>
              <h1>Secret Santa</h1>
            <SecretSanta />
          </div>

            <div className={hangoutsTab ? styles.hangouts : styles.hide}>
              <h1>Hangouts</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const user = getUser(state);
  return {
    user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logOut: () => {
      dispatch(logOut());
    }
  };
}

ShufflePage.propTypes = {
  logOut: PropTypes.func.isRequired,
  match: PropTypes.shape({
    url: PropTypes.string
  }).isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(ShufflePage);
