import React from 'react'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from "redux-logger"

import rootReducer, { initialState } from './src/common/reducer'
import Room from './src/Room/Room'

const logger = createLogger()

const store = createStore(rootReducer,
	initialState,
	applyMiddleware(thunk, logger))

const MessApp = () => (
	<Provider store={store}>
		<Room />
	</Provider>
)

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('MessApp', () => MessApp)
