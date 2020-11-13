import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import GitHubIcon from "@material-ui/icons/GitHub";
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
      // TODO: support nested lists
      // {
      //   id: "github",
      //   icon: <GitHubIcon />,
      //   href: "https://github.com/fundamerica",
      //   text: "Github Main",
      // },
      {
        id: "github-frontEnd",
        icon: <GitHubIcon />,
        href: "https://github.com/fundamerica/prime_trust_front_end",
        text: "Github Front_end project (codename Red Lotus)",
      },
      {
        id: "github-backEnd",
        icon: <GitHubIcon />,
        href: "https://github.com/fundamerica/prime_trust_api",
        text: "Github API project (codename White Lotus)",
      },
    ]}
  />
);

HelpfulLinks.key = "helpfulLinks";
HelpfulLinks.layout = {
  x: 0,
  y: 0,
  w: 3,
  h: 3,
};

export default HelpfulLinks;
