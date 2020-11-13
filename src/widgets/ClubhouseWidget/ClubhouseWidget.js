import { useEffect, useState } from "react";

import { ListWidget } from "../../components";
import getStories from "./getStories";

// Sign up for clubhouse api token https://github.com/clubhouse/api-cookbook/blob/main/set-up-instructions.md#setting-your-environment-variable
const ClubhouseWidget = (props) => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    let canceled = false;

    const fn = async () => {
      const storiesJson = await getStories();
      const newStories = storiesJson.data.map(({ id, app_url, name }) => {
        return {
          key: id,
          href: app_url,
          text: name,
        };
      });

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
    <ListWidget title="Clubhouse Stories Associated with you:" list={stories} />
  );
};

ClubhouseWidget.key = "Clubhouse";
ClubhouseWidget.layout = {
  x: 3,
  y: 0,
  w: 5,
  h: 2,
  minW: 2,
  maxW: 8,
};

export default ClubhouseWidget;
