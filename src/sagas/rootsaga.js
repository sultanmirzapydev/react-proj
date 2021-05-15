import {watchToken} from './handler/sagafile';
import {all, fork} from 'redux-saga/effects';

export function* rootSaga() {
	yield all([
		fork(watchToken),
		]);
}