import { useEffect, useState, useMemo } from "react";
import { CardContent, Typography } from "@material-ui/core";

import WidgetCard from "../WidgetCard";

import DisplayDate from "./DisplayDate";

function getTimeString(date) {
  return Intl.DateTimeFormat("en", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  }).format(date);
}

const DateTimeWidget = (props) => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(() => new Date());
    }, 1000);

    return () => clearImmediate(intervalId);
  }, []);

  const timeString = useMemo(() => currentTime && getTimeString(currentTime), [
    currentTime,
  ]);

  return (
    <WidgetCard textAlign="left" {...props}>
      <CardContent>
        <Typography variant="h4">
          <DisplayDate date={currentTime} />
        </Typography>
        <Typography variant="h5">{timeString}</Typography>
        <Typography variant="subtitle1">Other Timezones...</Typography>
      </CardContent>
    </WidgetCard>
  );
};

DateTimeWidget.key = "DateTime";
DateTimeWidget.layout = {
  x: 0,
  y: 0,
  w: 3,
  h: 1,
  minW: 2,
  maxW: 4,
};

export default DateTimeWidget;
