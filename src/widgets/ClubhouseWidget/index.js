import ClubhouseWidget from "./ClubhouseWidget";

let final = null;
const token = process.env.REACT_APP_CLUBHOUSE_API_TOKEN;
const hasToken = token && typeof token === "string" && token !== "false";

if (hasToken) {
  final = ClubhouseWidget;
}

export default final;
