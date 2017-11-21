import React from 'react';
import SingleSanta from './singleSanta';

class SecretSanta extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="secretsanta-view">
        <SingleSanta />
      </div>
    );
  }
}

export default SecretSanta;
