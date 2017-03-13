import { ActionConst } from 'react-native-router-flux'
import moment from 'moment'

export const initialState = {
	user: 'mikx',
	room: 'hello',
	data: {},
	scene: {},
}

const rootReducer = (state = initialState, action) => {
	return {
		...state,
		user: userReducer(state.user, action),
		room: roomReducer(state.room, action),
		data: dataReducer(state.data, action),
	}
}

const sceneReducer = (state = initialState.scene, action) => {
	switch (action.type) {
		case ActionConst.FOCUS:
			return action.scene

		default:
			return state
	}
}

const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case "CHANGE_USER":
			return action.user

		default:
			return state
	}
}

const roomReducer = (state = initialState.room, action) => {
	switch (action.type) {
		case "CHANGE_ROOM":
			return action.room

		default:
			return state
	}
}

const dataReducer = (state = [], action) => {
	switch (action.type) {
		case "GET_DATA_SUCCESS":
			return action.data || state

		// case "ADD_MESSAGE":
		// 	return state
		// 		? {
		// 			...state,
		// 			action.data,
		// 		}
		// 		: {
		// 			action.data,
		// 		}

		default:
			return state
	}
}

export default rootReducer
