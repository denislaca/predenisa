import React from 'react'
import { Actions, Router, Scene } from 'react-native-router-flux'
import { AppRegistry, View, Text, StyleSheet } from 'react-native'

import { Provider, connect } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'

import rootReducer, { initialState } from './src/common/reducer'
import RoomSelector from './src/Selectors/RoomSelector'
import Room from './src/Room/Room'

const logger = createLogger()
const store = createStore(rootReducer,
	initialState,
	applyMiddleware(thunk, logger))

const Scenes = Actions.create(
	<Scene key='root'>
		<Scene key='roomSelector' component={RoomSelector} title='Select Room' />
		<Scene key='room' component={Room} hideNavBar={true} title='Room' />
	</Scene>
)

const ConnectedRouter = connect()(Router)

const MessApp = () => (
	<Provider store={store}>
		<ConnectedRouter scenes={Scenes} />
	</Provider>
)

const styles = StyleSheet.create({

})

AppRegistry.registerComponent('MessApp', () => MessApp)
