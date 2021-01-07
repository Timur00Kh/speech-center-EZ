import sirv from "sirv";
import polka from "polka";
import compression from "compression";
import * as sapper from "@sapper/server";

const { PORT, NODE_ENV, SAPPER_BASE_ROUTE = "/" } = process.env;
const dev = NODE_ENV === "development";

console.log(SAPPER_BASE_ROUTE);

polka() // You can also use Express
  .use(
    SAPPER_BASE_ROUTE,
    // "/speech-center-EZ",
    compression({ threshold: 0 }),
    sirv("static", { dev }),
    sapper.middleware()
  )
  .listen(PORT, (err) => {
    if (err) console.log("error", err);
  });
