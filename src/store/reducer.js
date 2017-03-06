import moment from 'moment'

let initialState = {
  user: 'mikx',
  room: 'hello',
  roomData: [
    {user: 'mikx', text: 'hello everyone', time: moment().subtract(7, 'days')},
  ],
}

const mainReducer = (state = initialState, action) => {
	switch (action.type) {
		case "SEND_MESSAGE":
			return {
				...state,
				roomData: state.roomData.concat({
					user: action.user,
					text: action.text,
					time: moment()
				}),
			}

		default:
			return state
	}
}

export default mainReducer
