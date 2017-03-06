import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import RoomHeader from './RoomHeader'
import RoomContent from './RoomContent'
import RoomFooter from './RoomFooter'

const Room = ({user, room}) => (
	<View style={styles.room}>
		<RoomHeader
			user={user}
			room={room}
		/>
		<RoomContent
			user={user}
			room={room}
		/>
		<RoomFooter
			user={user}
			room={room}
		/>
	</View>
)

const styles = StyleSheet.create({
	room: {
		flex: 1,
	}
})

export default connect((state) => ({
	user: state.user,
	room: state.room,
}))(Room)
