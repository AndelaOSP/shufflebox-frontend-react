import React from 'react';
import CurrentUser from './CurrentUser';

class Calendar extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="calendar-panel">
          <CurrentUser />
        </div>
    );
  }
}

export default Calendar;
