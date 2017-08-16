/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import Album from './Album';
export default class AwesomeProject extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Album />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#593D9C',
		alignItems: 'stretch',
		justifyContent: 'center',
		flexDirection: 'column',
		flex: 1
	}
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
