import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions/santaActions';
const styles = require('./SecretSanta.scss');

class SingleSanta extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { user } = this.props;
    this.props.fetchSanta(user);
  }

  renderGlitters() {
    const text = 'JOY TO THE WORLD';
    return text.split('').map((v, i) => (
      <span
        key={i}
        className={i % 2 == 0 ? styles.christmasGold : styles.christmasBlue}
      >
        {v}
      </span>
    ));
  }

  render() {
    const { secretSanta } = this.props;
    const giftee = secretSanta.giftee;
    
    return (
      <div className={styles.singleSantaView}>
        <h1 className={styles.greeting}>{this.renderGlitters()}</h1>
        <div className={styles.container}>
          <p className={styles.gitfteeName}>
            {`You are gifting
            ${giftee.name}`}
          </p>
          <img className={styles.gifteeImage} src={giftee.avatar} />
        </div>

        {/* <div className={styles.snow} /> */}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    secretSanta: state.secretSanta,
    user: state.user
  };
};

const mapDispatchToprops = dispatch => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToprops)(SingleSanta);
