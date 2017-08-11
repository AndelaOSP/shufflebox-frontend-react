import React from 'react';
import {Link} from 'react-router';
import HomeNav from './HomeNav.js';
import Content from './Content.js';

class Landing extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <HomeNav />
        <Content />
      </div>
    );
  }
}

export default Landing;
