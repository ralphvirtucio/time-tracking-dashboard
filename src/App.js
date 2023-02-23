import dashboardData from './data.json';
import jeremyRobson from './images/image-jeremy.png';
import classes from './App.module.css';
import { Card } from './components/Card';
import { useState } from 'react';

function App() {
  const [timeframe, setTimeFrame] = useState('daily');

  let previousTimePeriod = '';
  if (timeframe === 'daily') {
    previousTimePeriod = 'Yesterday';
  } else if (timeframe === 'weekly') {
    previousTimePeriod = 'Last Week';
  } else {
    previousTimePeriod = 'Last Month';
  }

  const card = dashboardData.map((data) => {
    return (
      <Card
        key={data.title}
        title={data.title}
        previousTimePeriod={previousTimePeriod}
        timeframe={data.timeframes[timeframe]}
      />
    );
  });

  return (
    <div className={classes.app}>
      <main className={classes.main}>
        <section className={classes.user__section}>
          <div className={classes.user__profile}>
            <img
              src={jeremyRobson}
              alt='Profile of Jeremy Robson'
              className={classes.user__photo}
            />
            <div className={classes.user__info}>
              <p>Report for</p>
              <h1 className={classes.user__name}>Jeremy Robson</h1>
            </div>
          </div>
          <nav className={classes.nav}>
            <ul className={classes.nav__list}>
              <li>
                <button
                  className={
                    classes[
                      `${
                        timeframe === 'daily'
                          ? 'nav__link--active'
                          : 'nav__link'
                      }`
                    ]
                  }
                  onClick={() => setTimeFrame('daily')}>
                  Daily
                </button>
              </li>
              <li>
                <button
                  className={
                    classes[
                      `${
                        timeframe === 'weekly'
                          ? 'nav__link--active'
                          : 'nav__link'
                      }`
                    ]
                  }
                  onClick={() => setTimeFrame('weekly')}>
                  Weekly
                </button>
              </li>
              <li>
                <button
                  className={
                    classes[
                      `${
                        timeframe === 'monthly'
                          ? 'nav__link--active'
                          : 'nav__link'
                      }`
                    ]
                  }
                  onClick={() => setTimeFrame('monthly')}>
                  Monthly
                </button>
              </li>
            </ul>
          </nav>
        </section>
        {card}
      </main>
    </div>
  );
}

export default App;
