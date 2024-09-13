import RateLimit from "express-rate-limit";
const ApiLimit = RateLimit({
  window: 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again after some time",
});

export default ApiLimit;
