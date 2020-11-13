import { useEffect, useState, useMemo } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, List, ListItem, Divider } from "@material-ui/core";
// Sign up for clubhouse api token https://github.com/clubhouse/api-cookbook/blob/main/set-up-instructions.md#setting-your-environment-variable

import WidgetCard from "../WidgetCard";

const ClubhouseToken = process.env.REACT_APP_CLUBHOUSE_API_TOKEN;

const getUser = async () => {
  const response = await fetch("https://api.clubhouse.io/api/v3/member", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Clubhouse-Token": ClubhouseToken,
    },
  });
  return response.json();
};

const getStories = async () => {
  let userData = await getUser();
  let name = userData.mention_name;
  const response = await fetch(
    `https://api.clubhouse.io/api/v3/search/stories?query=owner:${name}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Clubhouse-Token": ClubhouseToken,
      },
    }
  );
  return response.json();
};

let ClubhouseWidget = null;

if (ClubhouseToken) {
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
  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

  ClubhouseWidget = (props) => {
    const classes = useStyles();
    const [stories, setStories] = useState({});

    useEffect(() => {
      let canceled = false;

      const fn = async () => {
        const storiesJson = await getStories();
        const newStories = storiesJson.data.reduce((output, story) => {
          output[story.id] = {
            url: story.app_url,
            name: story.name,
          };
          return output;
        }, {});

        if (!canceled) {
          setStories(newStories);
        }
      };

      fn();

      return () => {
        canceled = true;
      };
    }, []);

    const useStories = useMemo(() => {
      const keys = Object.keys(stories);
      if (keys.length > 0) {
        return (
          <List>
            {keys.map((key) => (
              <ListItemLink key={key} href={stories[key].url}>
                {stories[key].name}
              </ListItemLink>
            ))}
          </List>
        );
      }
    }, [stories]);

    return (
      <WidgetCard {...props}>
        <div className={classes.content}>
          <div className={classes.title}>
            <Typography component="h3" varient="h3">
              Clubhouse Stories Associated with you:
            </Typography>
          </div>
          {useStories && (
            <>
              <Divider />
              <div className={classes.stories}>{useStories}</div>
            </>
          )}
        </div>
      </WidgetCard>
    );
  };

  ClubhouseWidget.key = "Clubhouse";
  ClubhouseWidget.layout = {
    x: 0,
    y: 0,
    w: 3,
    h: 2,
    minW: 2,
    maxW: 4,
  };
}

export default ClubhouseWidget;
