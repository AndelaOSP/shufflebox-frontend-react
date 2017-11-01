import modalTypes from '../../enums/modalTypes';

export default {
  entities : {
    brownbag: {
      next_presenters: {
        "isloading": false
      },
      previous_presenters: {
        isloading: false
      },
      skipped: {
        isloading: false
      },
      ongoing: {
        isloading: false
      },
      potential_candidates: {
        isloading: false
      },
      visitors: {
        isloading: false
      }
    },
    secret_santa: {
      isloading: false
    },
    hangouts: {
      isloading: false
    }
  },
  ui: {
    confirm_modal: {
      isShowing: false,
      id: 0,
      message: ''
    },
    modal: modalTypes.NONE
  }
};
