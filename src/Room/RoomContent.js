import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { View, Text, ListView, StyleSheet } from 'react-native'

import RoomHeader from './RoomHeader'

class RoomContent extends Component {
	constructor() {
		super()
		
		this.state = {
			dataSource: null,
		}
	}

	componentWillMount() {
		let { data } = this.props

		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return r1.user !== r2.user || r1.text !== r2.text
			}
		})

		this.setState({
			dataSource: ds.cloneWithRows(data),
		})
	}

	renderRow(row, index) {
		return (
			<View style={styles.rowContainer} key={index}>
				<View style={styles.nameContainer}>
					<Text style={styles.name}>
						{row.user}
					</Text>
				</View>
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						{row.text}
					</Text>
				</View>
			</View>
		)
	}

	render() {
		let { data } = this.props

		return (
			<ListView
				style={styles.roomContentContainer}
				dataSource={this.state.dataSource}
				renderRow={(row, index) => this.renderRow(row, index)}
			/>
		)
	}
}

const styles = StyleSheet.create({
	roomContentContainer: {
		flex: 1,
		backgroundColor: 'lightyellow',
	},
	rowContainer: {
		flex: 1,
		padding: 10,
	},
	nameContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-start',
	},
	name: {
		fontSize: 20,
		fontStyle: 'italic',
		color: 'gray',
	},
	textContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	text: {

	},
})

RoomContent.propTypes = {
	user: PropTypes.string.isRequired,
	room: PropTypes.string.isRequired,
	data: PropTypes.arrayOf(PropTypes.shape({
		user: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
	})).isRequired,
}

export default connect((state) => ({
	data: state.roomData,
}))(RoomContent)
