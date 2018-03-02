import { take, put, call, fork } from 'redux-saga/effects'

import actionTypes from './actionTypes';
import { actionsCreator } from './actionsCreator';

import { GetAllBroadbandListSuccess } from './models'

import { API } from './api';


export function* getAllBroadbandListSuccess() {
    while (true) {
        try {
            yield take(actionTypes.ALL_BROADBAND_LIST_REQUEST);
            const result: GetAllBroadbandListSuccess = yield call(API.getAllBroadbandListSuccess);
            if (result.message_code === 'SUCCESS') {
                yield put(actionsCreator.getAllBroadbandListSuccess(result));
            } else {
                yield put(actionsCreator.getAllBroadbandListFailure(result));
            }
        } catch (error) {
            yield put(actionsCreator.getAllBroadbandListFailure({ message: error.toString() }));
        }
    }
}

export function* sagas() {
    yield [
        fork(getAllBroadbandListSuccess)
    ]
}
