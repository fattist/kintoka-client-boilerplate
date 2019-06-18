import { all, put, takeLatest } from 'redux-saga/effects';

import * as s from '@selectors/auth0';

function* error(response) {
  yield put({ type: s.AUTH0_ERROR, error: response });
}

function* success(response) {
  yield put({ type: s.AUTH0_SUCCESS, success: response });
}

export default function* auth0() {
  yield all([
    takeLatest(`event_${s.AUTH0_ERROR}`, error),
    takeLatest(`event_${s.AUTH0_SUCCESS}`, success)
  ])
}