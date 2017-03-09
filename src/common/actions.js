import database from './database'
import moment from 'moment'

export const addMessage = (data) => {
	return {
		type: "ADD_MESSAGE",
		data,
	}
}

export const watchRoomMessages = (room) => {
	return dispatch => {
		return database.ref(`/rooms/${room}/`).on('child_added', (snap) => {
			const newMessage = snap.val()
			dispatch(addMessage(newMessage))
		})
	}
}

// export const getRoomData = (room) => async dispatch => {
// 	dispatch({
// 		type: "GET_ROOM_DATA_REQUEST",
// 	})

// 	await database.ref(`/rooms/${room}/`).once('value',
// 		snap => {
// 	   	const data = snap.val();
// 	   	dispatch({
// 				type: "GET_ROOM_DATA_SUCCESS",
// 				data,
// 			})
// 	   }
// 	)
//    .catch((err) => {
//    	console.log(err);
//    	dispatch({
// 			type: "GET_ROOM_DATA_FAILURE",
// 		})
//    })

//    await dispatch(watchRoomMessages(room))
// }

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
