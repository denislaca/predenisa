import moment from 'moment'

export const initialState = {
	user: 'mikx',
	room: 'hello',
	roomData: [],
}

const rootReducer = (state = initialState, action) => {
	switch (action.type) {
		// case "GET_ROOM_DATA_SUCCESS":
		// 	return {
		// 		...state,
		// 		roomData: roomDataReducer(state.roomData, action),
		// 	}

		case "ADD_MESSAGE":
			return {
				...state,
				roomData: roomDataReducer(state.roomData, action),
			}

		default:
			return state
	}
}

const roomDataReducer = (state = [], action) => {
	switch (action.type) {
		// case "GET_ROOM_DATA_SUCCESS":
		// 	return action.data
		// 		? Object.values(action.data)
		// 		: state

		case "ADD_MESSAGE":
			return state
				? [
					...state,
					action.data,
				]
				: [
					action.data,
				]

		default:
			return state
	}
}

export default rootReducer
