import React from 'react';

class CurrentUser extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="current-user-panel">
        <img
          className="user-avatar"
          src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
          alt="user image not found"/>
        <div className="user-statement">
          <h6>What is your next event?</h6>
        </div>
      </div>
    );
  }
}

export default CurrentUser;