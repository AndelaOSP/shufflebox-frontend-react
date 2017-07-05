import React from 'react';

class PreviousBrownBag extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="previous-brown-bag">
        <div className="title">
          <h6>Previous Brownbag</h6>
          <span className="mdl-list__item-sub-title">27 jan</span>
        </div>
        <ul className="mdl-list">
          <li className="mdl-list__item">
              <span className="mdl-list__item-primary-content">
              <img
                className="avatar"
                src="https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg"
                alt="user image not found"/>
                <span>Jane Doe</span>
              </span>
              <span className="mdl-list__item-secondary-action">
                <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
                  <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
                </label>
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
            <span className="mdl-list__item-secondary-action">
              <label className="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" htmlFor="list-checkbox-1">
                <input type="checkbox" id="list-checkbox-1" className="mdl-checkbox__input" checked />
              </label>
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default PreviousBrownBag;
