import * as s from '@selectors/user'

const initial = {
  email: {},
  password: {},
  phone: {},
  username: {}
};

export default function user(state = initial, action = null) {
  let response;

  switch (action.type) {
    case s.USER_EMAIL:
      const email = action.email.toLowerCase();

      response = Object.assign({}, state, {
        email: {
          value: email,
          valid: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
        }
      })
    break;
    case s.USER_MOBILE_PHONE:
      const phone = action.phone.replace(/\D/g,'').substring(0, 10);

      response = Object.assign({}, state, {
        phone: {
          value: phone,
          valid: /^\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone)
        }
      });
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