import React from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import UUID from 'node-uuid';

const styles = require('./SkippedBrownBag.scss');

// dummy data
const  skipped_brown_bag = [
  {
    "id": 19,
    "username": "Test Andela",
    "email": "test-user9@andela.com",
    "profile": {
      "avatar": "https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg",
      "birth_date": null,
      "bio": ""
    }
  }
];
class SkippedBrownBag extends React.Component {
  constructor(props){
    super(props);

    this.listSkippedCandidates = this.listSkippedCandidates.bind(this);
  }

  listSkippedCandidates(candidates) {
    const listSkippedCandidates = candidates.map((candidate)=>
      <li key={UUID.v4()}>
        <img
        className="avatar"
        src={candidate.profile.avatar}
        alt="user image not found"/>
        <div className="user-info">
          <h5>{candidate.username}</h5>
          <span>skipped Brown Bag last week</span>
          <span>27 jan - 20 mar</span>
        </div>
      </li>
    );
    return listSkippedCandidates;
  }

  render(){
    return (
      <div className={styles.skippedBrownBag}>
        <ul className={styles.skippedList}>
          {this.listSkippedCandidates(this.props.skipped_brownbag_list)}
        </ul>
      </div>
    );
  }
}
SkippedBrownBag.propTypes = {
  skipped_brownbag_list: PropTypes.array
};

function mapStateToProps(state, ownProps){
  return {
    skipped_brownbag_list: state.brownbag.skipped || skipped_brown_bag
  };
}
export default connect(mapStateToProps)(SkippedBrownBag);
