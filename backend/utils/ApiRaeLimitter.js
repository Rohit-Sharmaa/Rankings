import { ApiRateLimit } from "express-rate-limit";
const limiter = ApiRateLimit({
  window: 60 * 1000,
  max: 5,
  message: "Too many attempts, please try again after some time",
});

export { limiter };
