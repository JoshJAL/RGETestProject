import fetch from "node-fetch";
import { users } from "./users.mjs";

const API_URL =
  "https://robgraham.vicihost.com/vicidial/non_agent_api.php?source=test&function=update_user&user=apiuser&pass=4Joshua2Test&";

async function updateUser(API_URL, users) {
  for (const user of users) {
    try {
      const response = await fetch(`${API_URL}agent_user=${user}&active=N`, {
        method: "GET",
      });
      console.log(response, "SUCCESS");
    } catch (e) {
      console.error(e);
      console.log("SOMETHING WENT WRONG");
    }
  }
}

updateUser(API_URL, users);
