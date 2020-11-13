import { useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
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
          .map(({ key, id, href, url, text, body, icon }) => {
            const useKey = key || id;
            const useText = text || body;

            if (!useKey || !useText) {
              return false;
            }

            const itemProps = {};
            const useHref = href || url;
            if (useHref) {
              Object.assign(itemProps, {
                button: true,
                component: "a",
                href: useHref,
                target: "_blank",
              });
            }
            return (
              <ListItem key={useKey} {...itemProps}>
                {icon && <ListItemIcon>{icon}</ListItemIcon>}
                <ListItemText>{useText}</ListItemText>
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
            <Typography variant="h5">{useTitle}</Typography>
          </div>
        )}
        {useTitle && useList && <Divider />}
        {useList && <div className={classes.listWrapper}>{useList}</div>}
      </div>
    </WidgetCard>
  );
};

export default ListWidget;
