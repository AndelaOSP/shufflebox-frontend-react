import React from 'react';
import moment from 'moment';
import { Button, Glyphicon } from 'react-bootstrap';

const styles = require('./Calendar.scss');

export default class Calendar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      date: moment()
    };
  }

  dayNames() {
    return (
      <div className={styles.dayNames}>
        <span>S</span>
        <span>M</span>
        <span>T</span>
        <span>W</span>
        <span>T</span>
        <span>F</span>
        <span>S</span>
      </div>
    );
  }

  weeks(date) {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = {
        number: date.format('DD'),
        isToday: date.isSame(new Date(), 'day'),
        isCurrentMonth: date.month() === date.month()
      };
      console.log('time', day.isCurrentMonth)
      // days.push(<div className={styles.dayNumbers + (day.isToday ? " today" : "") + (day.isCurrentMonth ? " currentMonth" : " differentMonth")}>{day.number}</div>);
      days.push(<div className={day.isToday ? styles.today : day.isCurrentMonth ? styles.dayNumbers : styles.differentMonth}>{day.number}</div>)
      date = date.clone();
      date.add(1, 'day');
    }

    return (
      <div>
        {days}
      </div>
    );
  }

  renderWeeks() {
    let  weeks = [],
    done = false,
    currentDate = this.state.date.startOf('month').day('Sunday'),
    monthIndex = currentDate.month(),
    count = 0;
    // console.log('dateee--->', moment().startOf('month').day('Sunday'))

    while (!done) {
      weeks.push(this.weeks(currentDate));
      currentDate.add(7, 'days');
      done = count++ > 2 && monthIndex !== currentDate.month();
      monthIndex = currentDate.month();
    }

    return weeks;
  }

  previous = () => {
    this.setState({
      date: this.state.date.subtract(2, 'months')
    }, () => {
      console.log('previous', this.state.date);
    });
  }

  next = () => {
    this.setState({
      date: this.state.date.add(0, 'months')
    });
  }

  render() {
    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarWidget}>
        <div>
          <Button className={styles.chevronButton} onClick={this.previous}>
            <Glyphicon glyph="chevron-left"/>
          </Button>
            <span className={styles.month}>{this.state.date.format('MMMM YYYY')}</span>
          <Button className={styles.chevronButton} onClick={this.next}>
            <Glyphicon glyph="chevron-right"/>
          </Button>
          </div>
          {this.dayNames()}
          {this.renderWeeks()}
        </div>
        <h4 className={styles.label}>COLOR CODES</h4>
        <div className={styles.info}>
        <div className={styles.currentDate}>
          <div/>
          <span>Current Date</span>
        </div>
        <div className={styles.brownBag}>
          <div/>
          <div>
            <span>Brown Bags</span>
            <span>Selected Weekly</span>
          </div>   
        </div>
        <div className={styles.secretSanta}>
          <div/>
          <div>
            <span>Secret Santa</span>
            <span>Selected Yearly</span>
          </div>    
        </div> 
        <div className={styles.hangouts}>
          <div/>
          <div>
            <span>Hangouts</span>
            <span>Selected Monthly</span>
          </div>
        </div>     
      </div>   
      </div>   
    );
  }
}
