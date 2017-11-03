import modalTypes from '../../enums/modalTypes';

export default {
  entities : {
    brownbag: {
      next_presenters: {
        "isloading": false
      },
      previous_presenters: {
        1: {
          "id": 1,
          "date": "2017-06-12",
          "status": "done",
          "user": {
            "id": 10,
            "username": "Test User1",
            "email": "test-user1@andela.com",
            "profile": {
              "avatar": "https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg",
              "birth_date": null,
              "bio": ""
            }
          }
        },
        2: {
          "id": 2,
          "date": "2017-06-12",
          "status": "done",
          "user": {
            "id": 11,
            "username": "Test User2",
            "email": "test-user2@andela.com",
            "profile": {
              "avatar": "https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg",
              "birth_date": null,
              "bio": ""
            }
          }
        },
        isloading: false
      },
      skipped: {
        19: {
          "id": 19,
          "username": "test-user-9",
          "email": "test-user9@andela.com",
          "profile": {
            "avatar": "https://motherboard-images.vice.com//content-images/contentimage/41599/1485499779158756.jpg",
            "birth_date": null,
            "bio": ""
          }
        },
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
  ui : {
    confirm_modal: {
      isShowing: false,
      id: 0,
      message: ''
    },
    modal: modalTypes.NONE
  }
};
