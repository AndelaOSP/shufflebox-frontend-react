import * as types from "../actions/actionTypes";

export function secretSantaReducer(state = {},action) {
    switch(action.type){
        case types.REQUEST_SANTAS:
            return action.santas;
        case types.REQUEST_SANTA:
            return action.santa;
        default:
            return state;
    }
}