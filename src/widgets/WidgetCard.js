import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    // padding: (props) => (props.padding ? theme.spacing(2) : undefined),
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

const WidgetCard = ({ children }) => {
  const classes = useStyles();

  return <Card className={classes.container}>{children}</Card>;
};

export default WidgetCard;
