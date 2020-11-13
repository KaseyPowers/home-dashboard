import { WidgetCard } from "../components";

const Placeholder = (props) => (
  <WidgetCard {...props}>Example Widget</WidgetCard>
);

Placeholder.key = "placeholder";
Placeholder.layout = {
  x: 2,
  y: 1,
  w: 4,
  h: 2,
};

export default Placeholder;
