import { Theme } from "@mui/material";
import { makeStyles, createStyles } from "@mui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    smGrid: {
      width: "320px",
      height: "320px",
      overflow: "hidden",
      [theme.breakpoints.down("lg")]: {
        width: "340px",
        height: "220px",
        paddingBotton: " 10px",
      },
    },
    smGridTx: {
      backgroundColor: "#FFFFFF",
      width: "640px",
      height: "320px",
      wordBreak: "break-all",
      [theme.breakpoints.down("lg")]: {
        width: "340px",
        height: "200px",
      },
    },
    mdGrid: {
      width: "540px",
      height: "502px",
      overflow: "hidden",
    },
    mdGridTx: {
      backgroundColor: "#FFFFFF",
      width: "502px",
      height: "502px",
      overflow: "hidden",
      alignContent: "center",

      flexDirection: "row",
      flexWrap: "wrap",
    },
    author: {
      fontSize: "24px",
      lineHeight: "34px",
      color: "#2D2D2D",
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
        lineHeight: "24px",
      },
    },
    title: {
      fontWeight: 700,
      fontSize: "36px",
      lineHeight: "43px",
      wordWrap: "break-word",
      color: " #F1A10A",
      height: "85px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "26px",
        lineHeight: "34px",
      },
    },
    text: {
      fontWeight: 400,
      fontSize: "24px",
      lineHeight: "34px",
      marginBotton: "15px",
      overflow: "hidden",
      maxWidth: "360ch",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      [theme.breakpoints.down("lg")]: {
        fontSize: "14px",
        lineHeight: "24px",
      },
    },
    icon: {
      display: "flex",
      justifyContent: " flex-end",
      [theme.breakpoints.down("lg")]: {
        width: "40%",
      },
    },
  })
);

export default useStyles;
