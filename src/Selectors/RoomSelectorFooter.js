import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'

import * as allActions from '../common/actions'

class RoomSelectorFooter extends Component {
	
	constructor() {
		super()

		this.state = {
			text: '',
		}
	}

	handleTextChange(text) {
		this.setState({
			text,
		})
	}

	handleSubmit() {
		let { actions } = this.props

		actions.addRoom(this.state.text)

		this.setState({
			text: '',
		})
	}

	render() {
		return (
			<View style={styles.footerContainer}>
				<Text style={styles.newRoom}>
					Create a new room
				</Text>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='type in the name'
						onChangeText={(text) => this.handleTextChange(text)}
						value={this.state.text}
					/>
				</View>
				<View style={styles.buttonContainer}>
					<Button
						style={styles.button}
						title='Create'
						onPress={() => this.handleSubmit()}
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
	newRoom: {
		textAlign: 'center',
		fontSize: 25,
	},
})

RoomSelectorFooter.propTypes = {
	actions: PropTypes.object.isRequired,
}

export default connect(
	null,
	dispatch => ({
		actions: bindActionCreators(allActions, dispatch)
	})
)(RoomSelectorFooter)
