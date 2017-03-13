import database from './database'
import moment from 'moment'

export const changeUser = (user) => {
	return {
		type: "CHANGE_USER",
		user,
	}
}

export const changeRoom = (room) => {
	return {
		type: "CHANGE_ROOM",
		room,
	}
}

// export const addMessage = (data) => {
// 	return {
// 		type: "ADD_MESSAGE",
// 		data,
// 	}
// }

// export const watchMessages = (room) => {
// 	return dispatch => {
// 		return database.ref('/rooms/').on('child_added', snap => {
// 			const newMessage = snap.val()
// 			dispatch(addMessage(newMessage))
// 		})
// 	}
// }

export const getData = () => async dispatch => {
	dispatch({
		type: "GET_DATA_REQUEST",
	})

	await database.ref('/rooms/').on('value', snap => {
	   	const data = snap.val();
	   	dispatch({
				type: "GET_DATA_SUCCESS",
				data,
			})
	   })
  //  .catch((err) => {
  //  	console.log(err);
  //  	dispatch({
		// 	type: "GET_DATA_FAILURE",
		// })
  //  })

   // await dispatch(watchRoomMessages(room))
}

export const sendMessage = (user, room, text) => dispatch => {
	dispatch({
		type: "SEND_MESSAGE_REQUEST",
	})

	database.ref(`/rooms/${room}/`).push({
		user,
		text,
		time: moment().toISOString(),
	})
	.then(() => {
		dispatch({
			type: "SEND_MESSAGE_SUCCESS",
		})
	})
	.catch(error => {
		console.log(error)
		dispatch({
			type: "SEND_MESSAGE_FAILURE",
		})
	})
}
