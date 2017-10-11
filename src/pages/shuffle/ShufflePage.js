import React from 'react';
import NavTabs from '../../components/navTabs/NavTabs';
import { LinkContainer } from 'react-router-bootstrap';
import { Button, Glyphicon, Nav, NavItem } from 'react-bootstrap';
import BrownBagContainer from '../brownBag/BrownBagContainer';
import OngoingBrownBag from '../brownBag/OngoingBrownBag';
import VisitorBrownBag from '../brownBag/VisitorBrownBag';
import SidePanel from '../sidePanel/SidePanel';

const styles = require('./ShufflePage.scss');

class ShufflePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tab: 'brownbag'
    };
  }

  componentWillReceiveProps(nextProps) {
    const groups = /\/(\w+)$/g.exec(nextProps.location.pathname); // get current tab
    this.setState({ tab: groups[1] });
  }

  render() {
    const brownBagTab = this.state.tab === 'brownbag';
    const secretSantaTab = this.state.tab === 'secretsanta';
    const hangoutsTab = this.state.tab === 'hangouts';
    return (
      <div className={styles.shuffleContainer}>
        <SidePanel />
        <div className={styles.tabsContainer}>
          <NavTabs>
            <LinkContainer to={'/shuffle/brownbag'}>
              <NavItem>Brown Bag</NavItem>
            </LinkContainer>
            <LinkContainer to={'/shuffle/secretsanta'}>
              <NavItem href="/secretsanta">Secret Santa</NavItem>
            </LinkContainer>
            <LinkContainer to={'/shuffle/hangouts'}>
              <NavItem href="/hangouts">Hangouts</NavItem>
            </LinkContainer>
            <Button className={styles.ellipsis}><Glyphicon glyph="option-horizontal" /></Button>
          </NavTabs>
          <div className={styles.shuffle}>
            <div className={brownBagTab ? styles.brownBag : styles.hide}>
              <BrownBagContainer />
            </div>

            <div className={secretSantaTab ? styles.secretSanta : styles.hide}>
            <h1>
              Secret Santa
            </h1>
          </div>

          <div className={hangoutsTab ? styles.hangouts : styles.hide}>
            <h1>
              Hangouts
            </h1>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default ShufflePage;
