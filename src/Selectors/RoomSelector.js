import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'
import { bindActionCreators } from 'redux'
import { View, Text, ListView, TouchableHighlight, StyleSheet } from 'react-native'

import * as allActions from '../common/actions'

class RoomSelector extends Component {
	constructor() {
		super()
		
		this.ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return r1.name !== r2.name
			}
		})

		this.state = {
			dataSource: this.ds.cloneWithRows([]),
		}
	}

	componentDidMount() {
		const { roomNames, actions } = this.props

		actions.getData()
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			dataSource: this.ds.cloneWithRows(nextProps.data),
		})
	}

	renderRow(row, index) {
		const { actions } = this.props

		return (
			<View style={styles.rowContainer} key={index}>
				<TouchableHighlight
					onPress={() => {
						actions.changeRoom(row)
						Actions.room()
					}}
				>
					<Text style={styles.name}>
						{row}
					</Text>
				</TouchableHighlight>
			</View>
		)
	}

	render() {
		return (
			<View style={styles.container}>
				<ListView
					style={styles.roomContentContainer}
					dataSource={this.state.dataSource}
					enableEmptySections={true}
					renderRow={(row, s, index) => this.renderRow(row, index)}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		paddingTop: 50,
	},
	rowContainer: {
		flex: 1,
		padding: 10,
		alignItems: 'center',
	},
	name: {
		fontSize: 20,
		fontStyle: 'italic',
		color: 'gray',
	},
})

RoomSelector.propTypes = {
	data: PropTypes.array.isRequired,
}

export default connect(
	state => ({
		data: Object.keys(state.data),
	}),
	dispatch => ({
		actions: bindActionCreators(allActions, dispatch)
	})
)(RoomSelector)
