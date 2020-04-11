import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './testConstants';

export const incrementCounter = () => {
	return {
        type: INCREMENT_COUNTER,
        payload: 123
	};
};

export const decrementCounter = () => {
	return {
		type: DECREMENT_COUNTER,
	};
};
