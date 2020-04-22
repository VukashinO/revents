import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import testReducer from '../../features/testarea/testReducer';
import eventReducer from '../../features/Event/eventReducer';
import asyncReducer from '../../features/async/asyncReducer';
import modalReducer from '../../features/modals/modalReducer';

const rootReducer = combineReducers({
	form: FormReducer,
	test: testReducer,
	events: eventReducer,
	async : asyncReducer,
	modals: modalReducer
});

export default rootReducer;
