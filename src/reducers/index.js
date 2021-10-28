import { combineReducers } from "redux";

import tab from "./tab";
import news from "./news";

const allReducers = combineReducers({
  tab,
  news,
});

export default allReducers;
