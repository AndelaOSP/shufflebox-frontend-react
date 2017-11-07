import React from 'react';
import fetch from 'isomorphic-fetch';
import fetchUrl from '../../config';
import { Button } from 'react-bootstrap';

const styles = require('./ShuffleEvents.scss');

class ShuffleEvents extends React.Component {
  constructor(props){
    super(props);
    this.shuffle = this.shuffle.bind(this);
  }

  shuffle() {
    fetch(`${fetchUrl}/api/shuffle/`, {
      method: "POST",
      headers: {
        'Authorization': process.env.TOKEN,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({"type": "brownbag", "limit": 1})
    })
    .then(function(response){
      if (response.status !== 201) {
        throw `Failed to shuffle brownbags: ${response.status}`;
      }
      // Check the response data
      response.json().then(function(data) {
        return data;
      });
    })
    .catch(function(error){
      throw error;
    });
  }

  render() {
    return (
      <div className={styles.shuffleEvents}>
        <h5>27 Jan - 20 Mar</h5>
        <h4>Next brown bag is almost up...</h4>
        <Button className={styles.shuffleButton} onClick={this.shuffle} >
          <img src="https://www.dropbox.com/s/okgmtdpih1xxau3/Shuffle.png?raw=1"/>SHUFFLE
        </Button>
      </div>
    );
  }
}

export default ShuffleEvents;
