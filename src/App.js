import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import { Placeholder } from "./widgets";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Placeholder xs={4} />
        <Placeholder xs={8} />
        <Placeholder xs={8} />
        <Placeholder xs={4} />
        <Placeholder xs={12} />
      </Grid>
    </div>
  );
};

export default App;
