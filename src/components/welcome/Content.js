import React from 'react';
import {Link} from 'react-router';

class Content extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className= "content">
        <div className="intro column is-one-third is-paddingless">
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1" width="500px"/>
          <div className="intro text">
          <span>
            <h1>Goodbye paper<br/>
            Hello Shufflebox</h1>
            <p className="sub-intro">
              With our new app you will be able to automate the task of selecting Andelans for hangouts,
              brown bag and secret santa.
            </p>
            <button className="btn-rounded"
            style={{ width: "180px", borderRadius: "20px" }}
            buttonStyle={{
              borderRadius: "20px",
              backgroundColor:"#33accc"
            }}
            >
              <strong> GET STARTED </strong>
            </button>
          </span>
          </div>
        </div>
        <div className="illustration column is-two-thirds is-paddingless">
          <img src="https://www.dropbox.com/s/l6wx0xixdfeilso/final.png?raw=1" className="image is-16*9"/>
        </div>
      </div>
    );
  }
}

export default Content;
