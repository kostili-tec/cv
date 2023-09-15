import classes from './Description.module.scss';

export const Description = () => {
  return (
    <div className={classes.mainContainer}>
      <div>
        <p className={classes.hi}>Hi all. I am</p>
        <h1 className={classes.head1}>Danil Podgorniy</h1>
        <h2 className={classes.head2}>{'> Front-end developer'}</h2>
      </div>
      <div>
        <p className={classes.commit}>{'// find my profile on Github:'}</p>
        <p className={classes.linkContainer}>
          <span className={classes.linkConst}>const</span>
          <span className={classes.linkGithub}>gihubLink</span>
          <span>=</span>
          <a
            href="https://github.com/kostili-tec"
            className={classes.linkUrl}
          >{`“https://github.com/kostili-tec”`}</a>
        </p>
      </div>
    </div>
  );
};
