import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class ConfirmModal extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div>
      {this.props.confirmModal.isShowing &&
        <div>
          <div className="confirm-modal-content">
            <span 
            className="confirm-modal-message">
              {this.props.confirmModal.message} {this.props.confirmModal.id}? 
            </span>
            <button className="btn" onClick={this.props.onConfirm}>OK</button>
            <button className="btn cancel-btn" onClick={this.props.onCancel}>Cancel</button>
          </div>
        </div>
       }    
      </div>
    );
  }
}

ConfirmModal.propTypes = {
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  confirmModal: PropTypes.object
};

function mapStateToProps (state, ownProps) {
  return {
    confirmModal: state.confirmModalReducer
  };
}
export default connect(mapStateToProps)(ConfirmModal);
