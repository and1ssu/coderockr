import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  bg: {
    background: "linear-gradient(90deg, #F1A10A 0%, #342303 100%);",
    height: "100%",
    padding: "80px",
    BoxSizing: "borderBox",
    border: "none",
    margin: 0,
    display: "flex",
    justifyContent: "center",
  },
  card: {
    background: "#FFFFFF",
    height: "1113px",
    width: "955px",
  },

  mdGrid: {
    width: "440px",
    height: "440px",
  },

  mdGridTx: {
    backgroundColor: "#FFFFFF",
    width: "502px",
    height: "502px",
    overflow: "hidden",
    alignContent: "center",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  author: {
    fontSize: "24px",
    lineHeight: "34px",
    color: "#2D2D2D",
  },
  title: {
    fontWeight: 700,
    fontSize: "36px",
    lineHeight: "43px",
    wordWrap: "break-word",
    color: " #F1A10A",
    height: "85px",
  },
  text: {
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "34px",
    marginBotton: "15px",
  },
  divTxt: {
    display: "flex",
    justifyContent: "center",
    width: "440px",
    height: "440px",
    flexWrap: "wrap",
  },
}));
export default useStyles;
