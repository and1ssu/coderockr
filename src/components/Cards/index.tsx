import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { Grid, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

import useStyles from "./styled";

interface IData {
  author: string;
  title: string;
  article: string;
  imageUrl: string;
}

export default function Cards({
  author,
  title,
  article,
  imageUrl,
}: IData): JSX.Element {
  const classes = useStyles();
  const navigate = useNavigate();
  return (
    <>
      <Grid container mb={5}>
        <Grid item sm={12} md={4} xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid item sm={12} md={6} xl={4} className={classes.smGridTx} p={2}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
          <div className={classes.icon}>
            <IconButton
              onClick={(): void => {
                navigate("/card");
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item sm={12} md={4} xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid item sm={12} md={6} xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
          <div className={classes.icon}>
            <IconButton
              onClick={(): void => {
                navigate("/card");
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid container mb={5}>
        <Grid item sm={12} xl={4}>
          {" "}
        </Grid>
        <Grid item sm={12} xl={4} className={classes.mdGrid}>
          <img src={imageUrl} alt="img" style={{ width: "100%" }} />
        </Grid>
        <Grid item sm={12} xl={4} className={classes.mdGridTx} p={5}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
          <div className={classes.icon}>
            <IconButton
              onClick={(): void => {
                navigate("/card");
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Grid>
      </Grid>
      <Grid container mb={5}>
        <Grid item sm={12} xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
          <div className={classes.icon}>
            <IconButton
              onClick={(): void => {
                navigate("/card");
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item sm={12} xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>

        <Grid item sm={12} xl={4} className={classes.smGridTx} p={3}>
          <p className={classes.author}>{author}</p>
          <span className={classes.title}>{title}</span>
          <p className={classes.text}>{article}</p>
          <div className={classes.icon}>
            <IconButton
              onClick={(): void => {
                navigate("/card");
              }}
            >
              <DoubleArrowIcon />
            </IconButton>
          </div>
        </Grid>
        <Grid item sm={12} xl={2} className={classes.smGrid}>
          <img src={imageUrl} alt="img" />
        </Grid>
        <Grid container mb={5} mt={5}>
          <Grid item sm={12} xl={4} className={classes.mdGrid}>
            <img src={imageUrl} alt="img" style={{ width: "100%" }} />
          </Grid>
          <Grid item sm={12} xl={4} className={classes.mdGridTx} p={5}>
            <p className={classes.author}>{author}</p>
            <span className={classes.title}>{title}</span>
            <p className={classes.text}>{article}</p>
            <div className={classes.icon}>
              <IconButton
                onClick={(): void => {
                  navigate("/card");
                }}
              >
                <DoubleArrowIcon />
              </IconButton>
            </div>
          </Grid>
          <Grid item xl={4}>
            {" "}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
