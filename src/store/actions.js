export const sendMessage = (user, text) => {
	return {
		type: "SEND_MESSAGE",
		user,
		text,
	}
}
