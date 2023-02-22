import workImg from '../images/icon-work.svg';
import ellipsisImg from '../images/icon-ellipsis.svg';
import classes from './Card.module.css';
import { Ellipsis } from './Ellipsis';

export const Card = () => {
  return (
    <div className={classes.card__container}>
      <div className={classes['card__photo-container']}>
        <img src={workImg} alt='Play' className={classes.card__photo} />
      </div>
      <div className={classes.card__content}>
        <div className={classes['card__row']}>
          <h2 className={classes.card__title}>Work</h2>
          <Ellipsis />
          {/* <img src={ellipsisImg} alt='Ellipsis' /> */}
        </div>
        <div className={classes['card__row']}>
          <p className={classes['card__current-time']}>32hrs</p>
          <p className={classes['card__previous-stat']}>
            Last Week - <span>8hrs</span>
          </p>
        </div>
      </div>
    </div>
  );
};
