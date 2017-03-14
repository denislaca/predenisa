import React from 'react'
import { View, StyleSheet } from 'react-native'

import RoomSelector from './RoomSelector'
import RoomSelectorFooter from './RoomSelectorFooter'

const RoomSelectorContainer = () => (
	<View style={styles.room}>
		<RoomSelector />
		<RoomSelectorFooter />
	</View>
)

const styles = StyleSheet.create({
	room: {
		flex: 1,
	}
})

export default RoomSelectorContainer
