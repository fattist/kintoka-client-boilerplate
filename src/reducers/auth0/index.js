import * as s from '@selectors/auth0'

const initial = { authenticated: false, profile: {}, registered: false };

export default function auth0(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.AUTH0_ERROR:
      response = Object.assign({}, state, {
        error: action.error
      });
    break;
    case s.AUTH0_PROFILE:
      response = Object.assign({}, state, {
        profile: action.profile
      });
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
        accessToken: action.success.response.accessToken,
        expiresIn: ((+new Date() * 1000) + action.success.response.expiresIn)
      });
    break;
    default:
      response = state;
  }

  return response;
}