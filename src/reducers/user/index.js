import * as s from '@selectors/user'

const initial = { disabled: true };

export default function user(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.USER_EMAIL:
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const email = action.email.toLowerCase();

      response = Object.assign({}, state, {
        email: email,
        disabled: !(state.hasOwnProperty('password') && re.test(email))
      })
    break;
    case s.USER_PASSWORD:
      const password = action.password;

      response = Object.assign({}, state, {
        password: action.password,
        disabled: !(state.hasOwnProperty('email') && !!password.replace(/[\s]/g, '').length)
      })
    break;
    default:
      response = state;
  }

  return response;
}