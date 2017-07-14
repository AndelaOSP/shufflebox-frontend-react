import * as actions from './actionTypes';

export function showModal(message, brownbagID){
  // Modal is an object that contains isShowing (boolean) and message (string )
  return {
    type: actions.SHOW_CONFIRM_MODAL_SUCCESS,
    message: message,
    id: brownbagID
  };
}

export function hideModal(){
  return {
    type: actions.HIDE_CONFIRM_MODAL_SUCCESS

  };
}
