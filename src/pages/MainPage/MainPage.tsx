import { Description } from './Description/Description';
import { Game } from './Game/Game';
import classes from './MainPage.module.scss';

export const MainPage = () => {
  return (
    <section className={classes.container}>
      <Description />
      <Game />
    </section>
  );
};
