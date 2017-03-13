import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { View, Text, ListView, StyleSheet } from 'react-native'
import moment from 'moment'

import RoomHeader from './RoomHeader'
import * as allActions from '../common/actions'

class RoomContent extends Component {
	constructor() {
		super()
		
		this.ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => {
				return r1.user !== r2.user || r1.text !== r2.text || r1.time !== r2.time
			}
		})

		this.state = {
			dataSource: this.ds.cloneWithRows([]),
		}
	}

	componentDidMount() {
		this.setState({
			dataSource: this.ds.cloneWithRows(this.props.data),
		})
	}	

	componentWillReceiveProps(nextProps) {
		this.setState({
			dataSource: this.ds.cloneWithRows(nextProps.data),
		})
	}

	renderRow(row, s, index) {
		const showName = !parseInt(index) || this.props.data[index-1].user !== row.user

		return (
			<View style={styles.rowContainer} key={index}>
				{
					showName && <View style={styles.nameContainer}>
						<Text style={styles.name}>
							{row.user}
						</Text>
						<Text style={styles.date}>
							{moment(row.time).format("YYYY-MM-DD HH:mm")}
						</Text>
					</View>
				}
				<View style={styles.textContainer}>
					<Text style={styles.text}>
						{row.text}
					</Text>
				</View>
			</View>
		)
	}

	render() {
		return (
			<ListView
				style={styles.roomContentContainer}
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={(row, s, index) => this.renderRow(row, s, index)}
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
		alignItems: 'center',
	},
	name: {
		fontSize: 20,
		fontStyle: 'italic',
		color: 'gray',
	},
	date: {
		fontSize: 12,
		color: 'gray',
		padding: 15,
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
		time: PropTypes.string.isRequired,
	})),
}

export default connect(
	state => ({
		data: Object.values(state.data[state.room]),
	}),
	dispatch => ({
		actions: bindActionCreators(allActions, dispatch)
	})
)(RoomContent)
