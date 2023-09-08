import application from "./actions/application";
import auth from "./actions/auth";
import dates from "./actions/dates";
import geoLocation from "./actions/geoLocation";
import modalwork from "./actions/modalwork";
import works from "./actions/works";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...application,
  ...auth,
  ...geoLocation,
  ...dates,
  ...works,
  ...modalwork,
};
