import { Grid, Paper } from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: (props) => (props.padding ? theme.spacing(2) : undefined),
    color: theme.palette.text.secondary,
    textAlign: "center",
  },
}));

const WidgetCard = ({ children, padding = true, ...gridProps }) => {
  const classes = useStyles({ padding });

  return (
    <Grid item {...gridProps}>
      <Paper className={classes.paper}>{children}</Paper>
    </Grid>
  );
};

export default WidgetCard;
