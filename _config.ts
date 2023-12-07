import lume from "lume/mod.ts";
import { FetchPlugin } from "./mod";

const site = lume();

site.use(FetchPlugin());

export default site;
