import React from 'react';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const styles = require('./Content.scss');

class Content extends React.Component {
  constructor(props) {
    super(props);
  }

  goToHomePage = () => {
    window.location = `https://api.andela.com/login?redirect_url=${window
      .location.origin}/login`;
  };

  render() {
    return (
      <div className={styles.contentContainer}>
        <div className={styles.intro}>
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" />
          <h1>
            Goodbye paper<br />hello shufflebox
          </h1>
          <p>
            With our new app you will be able to automate the task of selecting
            Andelans for hangouts, brown bag and secret santa.
          </p>
          <Button className={styles.button} onClick={this.goToHomePage}>
            SIGN IN TO GET STARTED
          </Button>
        </div>
        <div className={styles.illustration}>
          <img src="https://www.dropbox.com/s/l6wx0xixdfeilso/final.png?raw=1" />
        </div>
      </div>
    );
  }
}

Content.propTypes = {
  history: PropTypes.object
};

export default Content;
