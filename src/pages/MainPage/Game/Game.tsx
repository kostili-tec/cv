import greenSvg from '@/assets/svg/greenBlur.svg';
import blueSvg from '@/assets/svg/blueBlur.svg';
import classes from './Game.module.scss';

export const Game = () => {
  return (
    <div className={classes.game}>
      <img
        src={greenSvg}
        alt=""
        className={`${classes.greenSvg} ${classes.animated} ${classes.animatedDelay}`}
      />
      <img src={blueSvg} alt="" className={`${classes.blueSvg} ${classes.animated}`} />
    </div>
  );
};
