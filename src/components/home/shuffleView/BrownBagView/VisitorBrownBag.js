import React from 'react';

class VisitorBrownBag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="visitors-brown-bag">
        <div className="visitors-title">
          <span>VISITING</span>
        </div>
        <ul className="mdl-list">
          <li className="mdl-list__item mdl-list__item--two-line">
            <span className="mdl-list__item-primary-content">
              <img
              className="visitor-avatar"
              src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
              alt="user image not found"/>
              <div className="user-info">
                <span>John Doe</span>
                <span>Director Technology</span>
              </div>
            </span>
          </li>
          <li className="mdl-list__item mdl-list__item--two-line">
            <span className="mdl-list__item-primary-content">
              <img
              className="visitor-avatar"
              src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
              alt="user image not found"/>
              <div className="user-info">
                <span>John Doe</span>
                <span>Director Technology</span>
              </div>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default VisitorBrownBag;
