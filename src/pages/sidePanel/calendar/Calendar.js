import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import {
  format,
  isSameDay,
  addWeeks,
  startOfMonth,
  addDays,
  addMonths,
  subMonths,
  startOfWeek,
  subWeeks,
  endOfMonth,
  setDay,
  getMonth,
  subDays,
  isFriday,
  isToday,
  isFirstDayOfMonth,
  lastDayOfMonth,
  isSameMonth
} from 'date-fns';

const styles = require('./Calendar.scss');

export default class Calendar extends React.Component {
  constructor(props) {
    super(props); 

    this.state = {
      date:   new Date()
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
        number: format(date, 'DD'),
        isToday: isToday(date),
        isSameMonth: isSameMonth(date, this.state.date), 
        isFriday: isFriday(date),
        firstDay: isFirstDayOfMonth(date),
        month: getMonth(date),
        lastFriday: this.isSameMonth ? addDays(startOfWeek(endOfMonth(date)), 5) : subDays(addDays(startOfWeek(endOfMonth(date)), 5), 7),
        secretSanta: addDays(startOfWeek(addWeeks(startOfMonth(date), 2)), 5)
      };
 
      days.push(
        <div className={day.isToday ? styles.today : day.isSameMonth ? styles.dayNumbers : styles.differentMonth} key={day.number}>
          {day.number}
          <div className={styles.eventMarkers} key={'event marker'}>
            <div className={day.isFriday && day.isSameMonth ? styles.friday : styles.noEvent} key={'brownbag'}/>
            <div className={isSameDay(day.secretSanta, date) && day.month === 11 ? styles.december : styles.noEvent} key={'secret santa'}/>
            <div className={isSameDay(day.lastFriday, date) ? styles.hangoutMonth : styles.noEvent} key={'hangout'}/>
          </div> 
        </div>);
      date = addDays(date, 1);
    }

    return (
      <div className={styles.weeks} key={date}>
        {days}
      </div>
    );
  }

  renderWeeks() {
    let  weeks = [],
    done = false,
    currentDate = setDay(startOfMonth(this.state.date), 0),
    monthIndex = getMonth(currentDate),
    count = 0;

    while (!done) {
      weeks.push(this.weeks(currentDate));
      currentDate = addWeeks(currentDate, 1);
      done = count++ > 2 && monthIndex !== getMonth(currentDate);
      monthIndex = getMonth(currentDate);
    }

    return weeks;
  }

  previous = () => {
    this.setState({
      date: subMonths(this.state.date, 1)
    });
  }

  next = () => {
    this.setState({
      date: addMonths(this.state.date, 1)
    });
  }

  render() {
    return (
      <div className={styles.calendarContainer}>
        <div className={styles.calendarWidget}>
        <div className={styles.calendarHeader}>
          <Button className={styles.chevronButton} onClick={this.previous}>
            <Glyphicon glyph="chevron-left"/>
          </Button>
            <span className={styles.month}>{format(this.state.date,'MMMM YYYY')}</span>
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
