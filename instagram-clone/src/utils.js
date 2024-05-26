import store from "./store";
import { setUserA } from "store/auth";

export const userHandler = (data) => {
  store.dispatch(setUserA(data));
};
