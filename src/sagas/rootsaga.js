import {watchImages, watchToken,watchSearchImages} from './handler/sagafile';
import {all, fork} from 'redux-saga/effects';

export function* rootSaga() {
	yield all([
		fork(watchImages),
		fork(watchToken),
		fork(watchSearchImages),
		]);
}