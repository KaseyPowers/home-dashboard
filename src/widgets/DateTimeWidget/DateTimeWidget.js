import { CardContent, Typography } from "@material-ui/core";

import WidgetCard from "../WidgetCard";

const DateTimeWidget = (props) => {
  return (
    <WidgetCard {...props}>
      <CardContent>
        <Typography component="h3" varient="h3">
          Date
        </Typography>
        <Typography component="h4" varient="h4">
          Time
        </Typography>
        <Typography varient="subtitle1">Other Timezones...</Typography>
      </CardContent>
    </WidgetCard>
  );
};

DateTimeWidget.key = "DateTime";
DateTimeWidget.layout = {
  x: 0,
  y: 0,
  w: 3,
  h: 2,
  minW: 2,
  maxW: 4,
};

export default DateTimeWidget;
