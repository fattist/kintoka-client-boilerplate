import * as s from '@selectors/user'

const initial = {
  email: {},
  password: {},
  username: {}
};

export default function user(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.USER_EMAIL:
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      const email = action.email.toLowerCase();

      response = Object.assign({}, state, {
        email: {
          value: email,
          valid: re.test(email)
        }
      })
    break;
    case s.USER_PASSWORD:
      const password = action.password.replace(/[\s]/g, '');

      response = Object.assign({}, state, {
        password: {
          value: password,
          valid: !!password.length 
        }
      })
    break;
    case s.USER_USERNAME:
      const username = action.username.replace(/[\s]/g, '').toLowerCase();

      response = Object.assign({}, state, {
        username: {
          value: username,
          valid: !!username.length
        }
      });
    break;
    default:
      response = state;
  }

  return response;
}