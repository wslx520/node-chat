import {takeEvery} from 'redux-saga/effects';

import * as types from '../constants/ActionTypes';

const handleNewMessage = function* handleNewMessage(params) {
    console.log(params);
    yield takeEvery(types.ADD_MESSAGE, (action) => {
        action.author = params.username;
        console.log('saga', action);
        params.socket.send(JSON.stringify(action));
    });
};

export default handleNewMessage;