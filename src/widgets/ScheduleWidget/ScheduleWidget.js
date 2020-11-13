import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  WeekView,
  Toolbar,
  ViewSwitcher,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";

import { WidgetCard } from "../../components";

import colCounts from "../../colCounts";

const currentDate = "2018-11-01";
const schedulerData = [
  {
    startDate: "2018-11-01T09:45",
    endDate: "2018-11-01T11:00",
    title: "Meeting",
  },
  {
    startDate: "2018-11-01T12:00",
    endDate: "2018-11-01T13:30",
    title: "Go to a gym",
  },
];

const ScheduleWidget = () => {
  return (
    <WidgetCard>
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={9} endDayHour={18} />
        <WeekView startDayHour={10} endDayHour={19} />
        <Toolbar />
        <ViewSwitcher />
        <Appointments />
      </Scheduler>
    </WidgetCard>
  );
};

ScheduleWidget.key = "Schedule";

ScheduleWidget.layout = {
  x: 0,
  y: 0,
  w: 4,
  h: 4,
  minW: 2,
  maxW: 8,
};

ScheduleWidget.layouts = Object.keys(colCounts).reduce((output, breakpoint) => {
  const totalColumns = colCounts[breakpoint];
  output[breakpoint] = {
    x: totalColumns - ScheduleWidget.layout.w,
  };
  return output;
}, {});

export default ScheduleWidget;
