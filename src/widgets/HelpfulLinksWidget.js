import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import { ListWidget } from "../components";

const HelpfulLinks = () => (
  <ListWidget
    title="Helpful Links"
    list={[
      {
        id: "statusHero",
        icon: <VerifiedUserIcon />,
        href: "https://statushero.com/teams/prime-trust/statuses/current/edit",
        text: "Check into status hero",
      },
    ]}
  />
);

HelpfulLinks.key = "helpfulLinks";
HelpfulLinks.layout = {
  x: 3,
  y: 0,
  w: 3,
  h: 2,
};

export default HelpfulLinks;
