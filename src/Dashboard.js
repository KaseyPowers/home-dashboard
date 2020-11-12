import { useMemo } from "react";

import { useTheme } from "@material-ui/core/styles";

import { Responsive, WidthProvider } from "react-grid-layout";

import { Placeholder, DateTimeWidget, ClubhouseWidget } from "./widgets";
import WidgetCard from "./widgets/WidgetCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const sampleLayouts = {
  a: { x: 0, y: 0, w: 1, h: 2, static: true },
  b: { x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  c: { x: 4, y: 0, w: 1, h: 2 },
};
const Widgets = [DateTimeWidget, ClubhouseWidget, Placeholder, "a", "b", "c"];

function getLayoutForBreakpoint(widget, breakpoint) {
  if (typeof widget === "string") {
    return sampleLayouts[widget];
  }

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
      Widgets.map((widget) => {
        let key;
        let body;
        if (typeof widget === "string") {
          key = widget;
          body = <WidgetCard>{widget}</WidgetCard>;
        } else {
          key = widget.key;
          const Widget = widget;
          body = <Widget />;
        }

        return <div key={key}>{body}</div>;
      }),
    []
  );

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={breakpoints}
      cols={{ xl: 14, lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      {children}
    </ResponsiveGridLayout>
  );
};

export default App;
