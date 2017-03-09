import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import RoomHeader from './RoomHeader'
import * as allActions from '../common/actions'

class RoomFooter extends Component {
	
	constructor() {
		super()

		this.state = {
			text: '',
		}
	}

	handleTextChange(text) {
		this.setState({
			text: text,
		})
	}

	handleSendMessage() {
		let { user, room, actions } = this.props

		actions.sendMessage(user, room, this.state.text)

		this.setState({
			text: '',
		})
	}

	render() {
		return (
			<View style={styles.footerContainer}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='type in a message'
						onChangeText={(text) => this.handleTextChange(text)}
						value={this.state.text}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						title='Send'
						onPress={() => this.handleSendMessage()}
					/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	footerContainer: {

	},
	inputContainer: {

	},
	input: {
		padding: 10,
		textAlign: 'center'
	},
	buttonContainer: {

	},
	button: {

	},
})

RoomFooter.propTypes = {
	user: PropTypes.string.isRequired,
	room: PropTypes.string.isRequired,
	actions: PropTypes.object.isRequired,
}

export default connect(
	null,
	dispatch => ({
		actions: bindActionCreators(allActions, dispatch)
	})
)(RoomFooter)
