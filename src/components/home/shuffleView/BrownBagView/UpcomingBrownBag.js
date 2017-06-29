import React from 'react';

class UpcomingBrownBag extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="upcoming-brown-bag">
          <div className="upcoming-title">
            <h6>Upcoming Brown Bag</h6>
            <span className="mdl-list__item-sub-title">27 jan</span>
         </div>
          <ul className="mdl-list">
          <li className="mdl-list__item mdl-list__item--two-line">
          <span className="mdl-list__item-primary-content">
            <img
            className="avatar"
            src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
            alt="user image not found"/>
            <div className="user-info">
              <span>Shuffle Girl</span>
              <span className="mdl-list__item-sub-title">27 jan</span>
            </div>
          </span>
        </li>
        </ul>
      </div>
    );
  }
}

export default UpcomingBrownBag;
