import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import { View, Button, TextInput, StyleSheet } from 'react-native'

import * as allActions from '../common/actions'

class UserSelector extends Component {
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

	handleSendMessage() {
		let { actions } = this.props

		actions.changeUser(this.state.text)
		Actions.roomSelector()
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<TextInput
						style={styles.input}
						placeholder='type in your user name'
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
	container: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 50,
	},
	name: {
		fontSize: 20,
		fontStyle: 'italic',
		color: 'gray',
	},
	input: {
		padding: 10,
		textAlign: 'center'
	},
	inputContainer: {
		flex: 2,
	},
	buttonContainer: {
		flex: 1,
	},
	button: {

	},
})

UserSelector.propTypes = {
	actions: PropTypes.object.isRequired,
}

export default connect(
	null,
	dispatch => ({
		actions: bindActionCreators(allActions, dispatch)
	})
)(UserSelector)
