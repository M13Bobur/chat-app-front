import auth from './actions/auth';
import sidebar from './actions/sidebar';
import organizations from './actions/organizations';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  ...auth,
  ...sidebar,
  ...organizations,
};
