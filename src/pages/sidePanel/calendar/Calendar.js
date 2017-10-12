import React from 'react';
import { Button, Glyphicon } from 'react-bootstrap';
import { format, isSameDay, addWeeks, startOfMonth, addDays, addMonths, subMonths, subWeeks, setDay, getMonth } from 'date-fns';

console.log('hahahha', startOfMonth(new Date()))

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
        isToday: isSameDay(date, new Date()),
        isCurrentMonth: getMonth(date) === getMonth(this.state.date)
      };
      console.log('month', format(date, 'MMMM'))
      console.log('day', format(date, 'DD'))
      console.log('state month', format(this.state.date, 'MMMM'))
      console.log('time', day.isCurrentMonth)
      // days.push(<div className={styles.dayNumbers + (day.isToday ? " today" : "") + (day.isCurrentMonth ? " currentMonth" : " differentMonth")}>{day.number}</div>);
      days.push(<div className={day.isToday ? styles.today : day.isCurrentMonth ? styles.dayNumbers : styles.differentMonth}>{day.number}</div>)
      // date = date.clone();
      date = addDays(date, 1);
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
    currentDate = setDay(startOfMonth(this.state.date), 0),
    monthIndex = getMonth(currentDate),
    count = 0;
    console.log('renderWeek--->', format(currentDate, 'MMMM'))
    console.log('current Date', currentDate)

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
    }, () => {
      console.log('previous', this.state.date);
    });
  }

  next = () => {
    this.setState({
      date: addMonths(this.state.date, 1)
    });
    console.log('after next', this.state.date.format('MMMM'))
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
