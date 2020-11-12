// Sign up for clubhouse api token https://github.com/clubhouse/api-cookbook/blob/main/set-up-instructions.md#setting-your-environment-variable

import WidgetCard from "../WidgetCard";
import { CardContent, Typography, Link } from "@material-ui/core";


const ClubhouseWidget = (props) => {

  const getUser = async () => {
    const response = await fetch("https://api.clubhouse.io/api/v3/member", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Clubhouse-Token": process.env.REACT_APP_CLUBHOUSE_API_TOKEN,
      }
    });
    return response.json()
  } 

  const getStories = async() => {
    let userData = await getUser();
    let name = userData.mention_name;
    const response = await fetch(`https://api.clubhouse.io/api/v3/search/stories?query=owner:${name}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Clubhouse-Token": process.env.REACT_APP_CLUBHOUSE_API_TOKEN,
      },
    });
    return response.json();
  }

  const stories = getStories().then( json => {
    let storyObj = {}
    json.data.forEach(story => {
      stories[story.id] = {
        url: story.app_url,
        name: story.name,
      }
    })
    return storyObj;
  });
  

  return(
    <WidgetCard {...props}>
      <CardContent>
        <Typography component="h3" varient="h3">
          Clubhouse Stories Associated with you:
        </Typography>
      { stories && Object.keys(stories).map(key => (
        <Typography component="h4" varient="h4" key={key}>
          <Link href={stories[key].url}>{stories[key].name}</Link>
        </Typography>
      ))}

      </CardContent>
    </WidgetCard>
  )
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

export default ClubhouseWidget;