import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  smGrid: {
    width: "320px",
    height: "320px",
    overflow: "hidden",
  },
  smGridTx: {
    backgroundColor: "#FFFFFF",
    width: "640px",
    height: "320px",
    wordBreak: "break-all",
  },
  mdGrid: {
    width: "540px",
    height: "540px",
    overflow: "hidden",
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
    overflow: "hidden",
    maxWidth: "360ch",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
}));

export default useStyles;
