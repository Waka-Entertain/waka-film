import React from 'react';
import Cover from './cover';
import {
	View,
	AppRegistry,
	StyleSheet,
	Text,
	Image,
	FlatList
} from 'react-native';

export default class List extends React.PureComponent {
	_renderItem = ({ item }) => <Cover data={item}/>;

	render() {
		return <FlatList data={this.props.data} renderItem={this._renderItem} />;
	}
}
