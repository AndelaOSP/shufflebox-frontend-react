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
        isToday: date.isSame(new Date(), "day"),
        isCurrentMonth: date.month() === date.month()
      };
      console.log('time', day.isToday, day.isCurrentMonth)
      days.push(<div className={styles.dayNumbers + (day.isToday ? " today" : "") + (day.isCurrentMonth ? "current-month" : " different-month")}>{day.number}</div>);
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
    date = moment().startOf('month').add('w' -1).day('Sunday'),
    monthIndex = date.month(),
    count = 0;
    console.log('dateee--->', moment().startOf('month').day('Sunday'))

    while (!done) {
      weeks.push(this.weeks(date));
      date.add(7, 'days');
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  render() {
    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarWidget}>
          <Button className={styles.chevronButton}>
            <Glyphicon glyph="chevron-left"/>
          </Button>
            <span className={styles.month}>{this.state.date.format('MMMM YYYY')}</span>
          <Button className={styles.chevronButton}>
            <Glyphicon glyph="chevron-right"/>
          </Button>
          {this.dayNames()}
          {this.renderWeeks()}
        </div>
        <div className={styles.info}>
        <span>Brown Bags</span>
        <h5>Selected Weekly</h5>
        <span>Hangouts</span>
        <h5>Selected Monthly</h5>
        <span>Secret Santa</span>
        <h5>Selected Yearly</h5>
      </div>   
      </div>   
    );
  }
}
