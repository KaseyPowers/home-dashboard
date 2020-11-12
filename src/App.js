import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

import CssBaseline from "@material-ui/core/CssBaseline";
import {
  // unstable_createMuiStrictModeTheme,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";

import Dashboard from "./Dashboard";

// const theme = unstable_createMuiStrictModeTheme({
const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Dashboard />
  </ThemeProvider>
);

export default App;
