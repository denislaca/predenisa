import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import RoomHeader from './RoomHeader'

const Room = ({user, room}) => (
	<View style={styles.roomInfoContainer}>
		<View style={styles.roomNameContainer}>
			<Text style={styles.roomName}>
				{room}
			</Text>
		</View>
		<View style={styles.userContainer}>
			<Text style={styles.user}>
				logged in as: {user}
			</Text>
		</View>
	</View>
)

const styles = StyleSheet.create({
	roomInfoContainer: {
		height: 80,
		backgroundColor: 'lightblue',
	},
	roomNameContainer: {
		flex: 2,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'blue',
		padding: 10,
	},
	roomName: {
		fontSize: 40,
		color: 'red',
	},
	userContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'flex-start',
		padding: 10,
	},
	user: {
		fontSize: 10,
		color: 'black',
	}
})

export default Room
