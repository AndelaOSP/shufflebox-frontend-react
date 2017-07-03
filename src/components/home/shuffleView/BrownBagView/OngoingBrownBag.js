import React from 'react';

class OngoingBrownBag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="onlist-brown-bag">
        <div className="onlist-title">
          <span>WHO'S ON THE LIST</span>
        </div>
        <ul className="mdl-list">
          <li className="mdl-list__item mdl-list__item--two-line">
            <span className="mdl-list__item-primary-content">
              <img
              className="avatar"
              src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
              alt="user image not found"/>
              <div className="user-info">
                <span>Person One</span>
              </div>
            </span>
          </li>
          <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
                  <img
                      className="avatar"
                      src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
                      alt="user image not found"/>
                      <span>John Doe</span>
              </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default OngoingBrownBag;
