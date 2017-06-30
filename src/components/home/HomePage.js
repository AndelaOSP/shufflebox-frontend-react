import React from 'react';
import BrownBag from './shuffleView/BrownBagView/BrownBag';
import Calendar from './calendarView/Calendar';

class HomePage extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return ( 
      <div className="home-panel">
        <Calendar />
        <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header ">
          <div className="mdl-grid">
            <div className="mdl-cell mdl-cell--10-col">
              <header className="mdl-layout__header">
                <div className="mdl-layout__tab-bar mdl-js-ripple-effect">
                  <a href="#scroll-tab-1" className="mdl-layout__tab is-active">BrownBag</a>
                  <a href="#scroll-tab-2" className="mdl-layout__tab">Secret Santa</a>
                  <a href="#scroll-tab-3" className="mdl-layout__tab">Hangouts</a>
                </div>
              </header>
            </div>
            <div className="settings-panel mdl-cell mdl-cell--2-col">
              <button id="settings-button demo-menu-lower-right"
                className="mdl-button mdl-js-button mdl-button--icon"
              >
                <i className="material-icons">more_vert</i>
              </button>
              <ul className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor="demo-menu-lower-right">
              <li className="mdl-menu__item">Some Action</li>
              <li className="mdl-menu__item">Another Action</li>
              <li className="mdl-menu__item">Yet Another Action</li>
            </ul>
            </div>
          </div>
          
          <main className="mdl-layout__content">
            <section className="mdl-layout__tab-panel is-active" id="scroll-tab-1">
              <div className="page-content">
                <BrownBag />
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="scroll-tab-2">
              <div className="page-content">
                <p>Coming soon...</p>
                {/* add the component for secret santa here*/}
              </div>
            </section>
            <section className="mdl-layout__tab-panel" id="scroll-tab-3">
              <div className="page-content">
                <p>Coming later...</p>
                {/* add the component for hangouts here*/}
              </div>
            </section>
          </main>
         </div>
      </div>
    );
  }
}

export default HomePage;
