import { Grid } from "@mui/material";

import useStyles from "./styled";

interface IData {
  author: string;
  title: string;
  article: string;
  imageUrl: string;
  id: string;
}

export default function Cards({
  author,
  title,
  article,
  imageUrl,
  id,
}: IData): JSX.Element {
  const classes = useStyles();
  console.log(id);
  return (
    <>
      <Grid container mb={5}>
        <Grid item xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid item xl={4} className={classes.smGridTx} p={2}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
        </Grid>
        <Grid item xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid item xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
        </Grid>
      </Grid>
      <Grid container mb={5}>
        <Grid item xl={4}>
          {" "}
        </Grid>
        <Grid item xl={4} className={classes.mdGrid}>
          <img src={imageUrl} alt="img" style={{ width: "100%" }} />
        </Grid>
        <Grid item xl={4} className={classes.mdGridTx} p={5}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
        </Grid>
      </Grid>
      <Grid container mb={5}>
        <Grid item xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
        </Grid>
        <Grid item xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>

        <Grid item xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
        </Grid>
        <Grid item xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid container mb={5} mt={5}>
          <Grid item xl={4} className={classes.mdGrid}>
            <img src={imageUrl} alt="img" style={{ width: "100%" }} />
          </Grid>
          <Grid item xl={4} className={classes.mdGridTx} p={5}>
            <p className={classes.author}>{author}</p>
            <span className={classes.title}>{title}</span>
            <p className={classes.text}>{article}</p>
          </Grid>
          <Grid item xl={4}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
