import { all } from 'redux-saga/effects';

import auth0 from '@sagas/auth0'

export default function* root() {
  yield all([
    auth0()
  ])
}