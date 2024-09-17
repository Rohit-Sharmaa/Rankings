import cron from "node-cron";
import automatedUserProfileUpdate from "./automatedUserProfileUpdate.js";

cron.schedule("0 */1 * * *", () => {
  console.log("Running scheduled update of user profiles...");
  automatedUserProfileUpdate();
});
