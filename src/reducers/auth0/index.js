import * as s from '@selectors/auth0'

const initial = { authenticated: false, registered: false };

export default function auth0(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.AUTH0_ERROR:
      console.warn(s.AUTH0_ERROR, action.error);
      response = Object.assign({}, state, {
        error: action.error
      })
    break;
    case s.AUTH0_REGISTERED:
      response = Object.assign({}, state, {
        authenticated: false,
        registered: true
      });
    break;
    case s.AUTH0_SUCCESS:
      response = Object.assign({}, state, {
        authenticated: true,
        success : action.success
      });
    break;
    default:
      response = state;
  }

  return response;
}