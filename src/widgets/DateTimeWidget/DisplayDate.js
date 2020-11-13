import { makeStyles } from "@material-ui/core/styles";
import { useMemo } from "react";

const useStyles = makeStyles((theme) => ({
  datePart: {
    display: "inline-block",
  },
}));

const DisplayDate = ({ date }) => {
  const classes = useStyles();
  const day = useMemo(
    () =>
      date &&
      date.toLocaleDateString &&
      date.toLocaleDateString("en-US", {
        weekday: "long",
      }),
    [date]
  );
  const dateString = useMemo(
    () =>
      date &&
      date.toLocaleDateString &&
      date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
    [date]
  );

  return (
    (day && dateString && (
      <>
        <span className={classes.datePart}>{day},</span>
        <span className={classes.datePart}>{dateString}</span>
      </>
    )) ||
    null
  );
};

export default DisplayDate;
