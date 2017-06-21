import React from 'react';

class Header extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    // const nav_styles = {
    //   marginleft: 900
    // };
    return (
      <div>
        <div className= "nav-bar">
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" className="image is-48x48" style={{marginLeft: 90 + 'px'}}/>
          <div className="column-is-half">
            <a href="/" >SHUFFLEBOX </a>
          </div>
          <nav>
            <ul>
              <li><a href="/">HOME</a></li>
              <li><a href="/about">ABOUT</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;
