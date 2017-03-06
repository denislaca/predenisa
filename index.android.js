import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import mainReducer from './src/store/reducer'

import Room from './src/Room/Room'

const MessApp = () => (
	<Provider store={createStore(mainReducer)}>
		<Room />
	</Provider>
)

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('MessApp', () => MessApp)
