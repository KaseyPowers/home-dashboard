import { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Divider } from "@material-ui/core";
// Sign up for clubhouse api token https://github.com/clubhouse/api-cookbook/blob/main/set-up-instructions.md#setting-your-environment-variable

import WidgetCard from "./WidgetCard";

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
  listWrapper: {
    overflow: "auto",
    paddingTop: 0,
  },
}));

const ListWidget = ({ title, list = [] }) => {
  const classes = useStyles();

  const useTitle = useMemo(() => {
    let output = title;
    if (title && typeof title === "string" && !/:$/.test(title)) {
      output += ":";
    }
    return output;
  }, [title]);

  const useList = useMemo(() => {
    const listContents =
      (Array.isArray(list) &&
        list
          .map(({ key, href, url, text }) => {
            if (!key || !text) {
              return false;
            }
            const itemProps = {};
            const useHref = href || url;
            if (useHref) {
              Object.assign(itemProps, {
                button: true,
                component: "a",
                href: useHref,
              });
            }
            return (
              <ListItem key={key} {...itemProps}>
                {text}
              </ListItem>
            );
          })
          .filter(Boolean)) ||
      [];

    if (listContents.length > 0) {
      return <List>{listContents}</List>;
    }
  }, [list]);

  return (
    <WidgetCard>
      <div className={classes.content}>
        {useTitle && (
          <div className={classes.title}>
            <Typography component="h3" varient="h3">
              {useTitle}
            </Typography>
          </div>
        )}
        {useTitle && useList && <Divider />}
        {useList && <div className={classes.listWrapper}>{useList}</div>}
      </div>
    </WidgetCard>
  );
};

export default ListWidget;
