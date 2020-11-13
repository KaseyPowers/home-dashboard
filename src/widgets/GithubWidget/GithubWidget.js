import { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Divider } from "@material-ui/core";
import { getPulls } from "./getGithub" ;

import { WidgetCard } from "../../components";

const useStyles = makeStyles((theme) => ({
  content: {
    display: "flex",
    flexDirection: "column",
    maxHeight: "100%",
  },
  title: {
    flex: "1 0 auto",
    padding: theme.spacing(2),
  },
  stories: {
    overflow: "auto",
    paddingTop: 0,
  },
}));
// function ListItemLink(props) {
//   return <ListItem button component="a" {...props} />;
// }

const GithubWidget = (props) => {
  const pulls = getPulls("prime_trust_api")
  console.log(pulls)

  return (
    <WidgetCard {...props}>
      hey
    </WidgetCard>
  );
};

GithubWidget.key = "Github";
GithubWidget.layout = {
  x: 0,
  y: 0,
  w: 3,
  h: 2,
  minW: 2,
  maxW: 4,
};

export default GithubWidget;
