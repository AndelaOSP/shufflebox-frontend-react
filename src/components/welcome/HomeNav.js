import React from 'react';
import {Link} from 'react-router';

class HomeNav extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className= "nav-bar">
        <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" className="image is-48x48"/>
        <div className="column is-half">
          <a href="/"> SHUFFLEBOX </a>
        </div>
          <nav>
            <ul>
              <li>
                <a href="/about"> ABOUT </a>
              </li>
              <li>
                <a href="/faq"> FAQ </a>
              </li>
            </ul>
          </nav>
      </div>
    );
  }
}

export default HomeNav;
