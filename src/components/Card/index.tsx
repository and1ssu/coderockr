import useStyles from "./styled";

export default function Card(): JSX.Element {
  const classes = useStyles();
  return (
    <div className={classes.bg}>
      <div>
        {/* <Grid container>
          <Grid item xl={6} className={classes.mdGrid}>
            <img src={imageUrl} alt="img" style={{ width: "100%" }} />
          </Grid>
          <Grid item xl={6} className={classes.mdGridTx} p={5}>
            <p className={classes.author}>{author}</p>
            <span className={classes.title}>{title}</span>
            <p className={classes.text}>{article}</p>
          </Grid>
        </Grid> */}
        <h1>teste</h1>
        <h5>teste</h5>
      </div>
    </div>
  );
}
