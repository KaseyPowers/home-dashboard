import { Card } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    // padding: (props) => (props.padding ? theme.spacing(2) : undefined),
    color: theme.palette.text.secondary,
    textAlign: (props) => (props.textAlign ? props.textAlign : undefined),
  },
}));

const WidgetCard = ({ children, textAlign = "center" }) => {
  const classes = useStyles({ textAlign });

  return <Card className={classes.container}>{children}</Card>;
};

export default WidgetCard;
