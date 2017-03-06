import React from 'react'
import { connect } from 'react-redux'
import { View, Text, StyleSheet } from 'react-native'

import RoomHeader from './RoomHeader'

const Room = ({user, room}) => (
	<RoomHeader
		user={user}
		room={room}
	/>
)

const styles = StyleSheet.create({
	
})

export default connect((state) => ({
	user: state.user,
	room: state.room,
}))(Room)
