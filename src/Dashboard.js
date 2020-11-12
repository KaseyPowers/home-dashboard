import { Responsive, WidthProvider } from "react-grid-layout";

import { Placeholder } from "./widgets";
import WidgetCard from "./widgets/WidgetCard";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
  { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: "c", x: 4, y: 0, w: 1, h: 2 },
  { i: "placeholder", x: 2, y: 1, w: 4, h: 2 },
];

const App = () => {
  const layouts = {
    xs: layout,
  };

  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
    >
      <WidgetCard key="a">a</WidgetCard>
      <WidgetCard key="b">b</WidgetCard>
      <WidgetCard key="c">c</WidgetCard>
      <Placeholder key="placeholder" />
    </ResponsiveGridLayout>
  );
};

export default App;
