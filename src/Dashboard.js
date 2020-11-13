import { useMemo } from "react";

import { useTheme } from "@material-ui/core/styles";

import { Responsive, WidthProvider } from "react-grid-layout";

import {
  Placeholder,
  DateTimeWidget,
  ClubhouseWidget,
  ScheduleWidget,
  HelpfulLinksWidget,
} from "./widgets";

import colCounts from "./colCounts";

const ResponsiveGridLayout = WidthProvider(Responsive);

const Widgets = [
  DateTimeWidget,
  HelpfulLinksWidget,
  ClubhouseWidget,
  Placeholder,
  ScheduleWidget,
].filter(Boolean);

function getLayoutForBreakpoint(widget, breakpoint) {
  const { key, layout = {}, layouts = {} } = widget;
  const output = {
    i: key,
    ...layout,
  };
  if (layouts && layouts[breakpoint]) {
    Object.assign(output, layouts[breakpoint]);
  }
  return output;
}

const App = () => {
  const theme = useTheme();
  const breakpoints = useMemo(
    () => theme && theme.breakpoints && theme.breakpoints.values,
    [theme]
  );

  const layouts = useMemo(() => {
    const keys = Object.keys(breakpoints);
    return keys.reduce((output, key) => {
      output[key] = Widgets.map((widget) =>
        getLayoutForBreakpoint(widget, key)
      );
      return output;
    }, {});
  }, [breakpoints]);

  const children = useMemo(
    () =>
      Widgets.map((Widget) => (
        <div key={Widget.key}>
          <Widget />
        </div>
      )),
    []
  );

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={colCounts}
    >
      {children}
    </ResponsiveGridLayout>
  );
};

export default App;
