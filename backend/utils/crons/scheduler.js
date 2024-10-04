import cron from "node-cron";
import automatedUserProfileUpdate from "./automatedUserProfileUpdate.js";
import { automatedContestDataUpdate } from "../../controllers/contest.js";

cron.schedule("0 */1 * * *", () => {
  console.log("Running scheduled update of user profiles...");
  automatedUserProfileUpdate();
});

cron.schedule("0 */5 * * *", () => {
  console.log("Running scheduled update of contest data profiles...");
  automatedContestDataUpdate();
});
