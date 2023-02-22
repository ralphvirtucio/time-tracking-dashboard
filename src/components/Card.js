import workImg from '../images/icon-work.svg';
import classes from './Card.module.css';
import { Ellipsis } from './Ellipsis';
import { Icon } from './Icon';

export const Card = ({ title, timeframe }) => {
  return (
    <div className={classes.card__container}>
      {/* <div className={classes['card__photo-container']}> */}
      {/* <img src={workImg} alt='Play' className={classes.card__photo} /> */}
      <Icon iconName={title.toLowerCase()} />
      {/* </div> */}
      <div className={classes.card__content}>
        <div className={classes['card__row']}>
          <h2 className={classes.card__title}>{title}</h2>
          <Ellipsis />
        </div>
        <div className={classes['card__row']}>
          <p className={classes['card__current-time']}>
            {timeframe.daily.current}hrs
          </p>
          <p className={classes['card__previous-stat']}>
            Last Week - <span>{timeframe.daily.previous}hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
};
