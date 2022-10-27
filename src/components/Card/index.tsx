import { Grid } from "@mui/material";

import { useCreateData } from "../../context/DataProvider/useCreateData";
import useStyles from "./styled";

export default function Card(): JSX.Element {
  const { articles } = useCreateData();
  const classes = useStyles();

  return (
    <div className={classes.bg}>
      <div className={classes.card}>
        <Grid container>
          <Grid item xl={6}>
            <img
              src={articles[0].imageUrl}
              alt="imagem"
              className={classes.mdGrid}
            />
          </Grid>
          <Grid item xl={6} className={classes.mdGridTx}>
            <p className={classes.author}>{articles[0].author}</p>
            <span className={classes.title}>{articles[0].title}</span>
          </Grid>
        </Grid>
        <Grid container className={classes.divTxt}>
          <div className={classes.divTxt}>
            <p className={classes.text}>{articles[0].article}</p>
          </div>
        </Grid>
      </div>
    </div>
  );
}
