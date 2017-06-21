import React from 'react';
import {Link} from 'react-router';
import Header from './components/Header';
import Content from './components/Content';

class AuthPage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div>
        <Header />
        <Content />
      </div>
    );
  }
}

export default AuthPage;
