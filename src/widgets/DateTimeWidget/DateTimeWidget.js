import { useEffect, useState, useMemo } from "react";
import { CardContent, Typography } from "@material-ui/core";

import { WidgetCard } from "../../components";

import DisplayDate from "./DisplayDate";

const baseOptions = {
  hour: "numeric",
  minute: "numeric",
  hour12: true,
  timeZoneName: "short",
};
function getTimeString(date, timeZone) {
  const options = { ...baseOptions };
  if (timeZone) {
    options.timeZone = timeZone;
  }

  return Intl.DateTimeFormat(navigator.language, options).format(date);
}

// const useTimeZones = [
//     "America/Chicago",
//     "America/Indiana/Indianapolis"
// ];

const DateTimeWidget = (props) => {
  const [currentTime, setCurrentTime] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(() => new Date());
    }, 1000);

    return () => clearImmediate(intervalId);
  }, []);

  const timeStrings = useMemo(() => {
    const output = [];
    if (currentTime) {
      // show current time
      output.push(getTimeString(currentTime));
      // TODO: useTimeZones to get other ones
    }
    return output;
  }, [currentTime]);

  return (
    <WidgetCard textAlign="left" {...props}>
      <CardContent>
        <Typography variant="h4">
          <DisplayDate date={currentTime} />
        </Typography>
        {timeStrings.map((timeString, index) => (
          <Typography
            variant={index === 0 ? "h5" : "subtitle1"}
            key={timeString}
          >
            {timeString}
          </Typography>
        ))}
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
