import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';

import * as brownbagActions from '../../../../actions/brownbagActions';

class UpcomingBrownBag extends React.Component {
  constructor(props){
    super(props);
    this.handleConfirmBrownbag = this.handleConfirmBrownbag.bind(this);
    this.handleCancelBrownbag = this.handleCancelBrownbag.bind(this);
  }

  componentDidMount() {
    this.props.getNextPresenters();
  }

  handleConfirmBrownbag(brownBag) {
    brownBag.status = 'done'
    this.props.confirmBrownBag(brownBag);
    this.props.getNextPresenters();
  }

  handleCancelBrownbag(brownBag){
    brownBag.status = 'not_done'
    this.props.cancelBrownBag(brownBag);
  }

  nextPresenters() {
    const { presenters }  = this.props;
    if (presenters.user) {
      const brownBag = { id: presenters.id, date: presenters.date, status:'' };
      return (
        <MuiThemeProvider>
          <li className="mdl-list__item">
            <span className="mdl-list__item-primary-content">
              <img
              className="avatar"
              src={presenters.user.profile.avatar}
              alt="user image not found"/>
              <div className="user-info">
                <span>{`${presenters.user.first_name} ${presenters.user.last_name}`}</span>
                <span className="mdl-list__item-sub-title">{presenters.user.date}</span>
              </div>
              <div>
                <FlatButton label="Confirm" primary
                  onClick={() => this.handleConfirmBrownbag(brownBag)}
                />
              <FlatButton label="Cancel" secondary
                  onClick={() => this.handleCancelBrownbag(brownBag)}
                />
              </div>
            </span>
          </li>
        </MuiThemeProvider>
        );
    }
    return (
      <p>Loading .....</p>
    );
  }

  render(){
    return (
      <div className="upcoming-brown-bag">
          <div className="upcoming-title">
            <h6>Upcoming Brown Bag</h6>
            <span className="mdl-list__item-sub-title">27 jan</span>
         </div>
           <ul className="mdl-list">
            {this.nextPresenters()}
        </ul>
      </div>
    );
  }
}

UpcomingBrownBag.propTypes = {
  presenters: PropTypes.object.isRequired,
  getNextPresenters: PropTypes.func.isRequired,
  confirmBrownBag: PropTypes.func.isRequired,
  cancelBrownBag: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    presenters: state.nextBrownbagReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getNextPresenters: (presenter) => {
      dispatch(brownbagActions.getNextPresenter(presenter));
    },
    confirmBrownBag: (brownBagObj) => {
      dispatch(brownbagActions.confirmBrownBag(brownBagObj));
    },
    cancelBrownBag: (brownBagObj) => {
      dispatch(brownbagActions.cancelBrownBag(brownBagObj));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingBrownBag);
