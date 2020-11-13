import { useEffect, useState } from "react";
// Sign up for clubhouse api token https://github.com/clubhouse/api-cookbook/blob/main/set-up-instructions.md#setting-your-environment-variable

import WidgetCard from "../WidgetCard";
import { CardContent, Typography, Link } from "@material-ui/core";

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
  ClubhouseWidget = (props) => {
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

    return (
      <WidgetCard {...props}>
        <CardContent>
          <Typography component="h3" varient="h3">
            Clubhouse Stories Associated with you:
          </Typography>
          {stories &&
            Object.keys(stories).map((key) => (
              <Typography component="h4" varient="h4" key={key}>
                <Link href={stories[key].url}>{stories[key].name}</Link>
              </Typography>
            ))}
        </CardContent>
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
