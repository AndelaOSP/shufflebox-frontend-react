import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <div className= "nav-bar">
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" className="image is-48x48"/>
        </div>
        <div className="intro column is-one-third is-paddingless">
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" />
        </div>

        <div className="intro text">
        <span>
          Goodbye paper
          Hello Shufflebox
          <p className="sub-intro">
            With our new app you will be able to automate
            the task of selecting Andelans for hangouts,
            brown bag and secret santa.
          </p>
          <button className="btn-rounded">
            GET STARTED
          </button>
        </span>
        </div>
      </div>
    );
  }
}

export default HomePage;
