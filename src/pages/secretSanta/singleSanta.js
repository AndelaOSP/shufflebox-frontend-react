import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../redux/actions/santaActions';

class SingleSanta extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
      const {user} = this.props;
      this.props.fetchSanta(user);
  }

  render(){
    const {secretSanta} = this.props;
    const giftee = secretSanta[0].giftee;
    return (
      <div className="singlesanta-view">
        You are gifting {giftee.first_name} {giftee.last_name}
        <img src={giftee.profile.avatar} />
      </div>
    );
  }
}
const mapStateToProps = (state, ownProps) => {
   return {
    secretSanta: state.secretSanta,
    user: state.user
   };
};

const mapDispatchToprops = (dispatch) => {
    return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToprops)(SingleSanta);