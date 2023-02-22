import workImg from '../images/icon-work.svg';
import classes from './Card.module.css';
import { Ellipsis } from './Ellipsis';
import { Icon } from './Icon';

export const Card = ({ title, timeframe }) => {
  let cardClass = '';
  switch (title.toLowerCase()) {
    case 'work':
      cardClass = 'work__container';
      break;
    case 'play':
      cardClass = 'play__container';
      break;
    case 'study':
      cardClass = 'study__container';
      break;
    case 'exercise':
      cardClass = 'exercise__container';
      break;
    case 'social':
      cardClass = 'social__container';
      break;
    case 'self care':
      cardClass = 'selfcare__container';
      break;
    default:
  }

  return (
    <div className={classes[`${cardClass}`]}>
      <div className={classes['card__photo-container']}>
        {/* <img src={workImg} alt='Play' className={classes.card__photo} /> */}
        <Icon iconName={title.toLowerCase()} />
      </div>
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
