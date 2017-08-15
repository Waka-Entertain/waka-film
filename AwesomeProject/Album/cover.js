import React, { Component } from 'react';
import {
	View,
	Image,
	StyleSheet,
	AppRegistry,
	ImageBackground,
	Text
} from 'react-native';

export default class Cover extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Image
					source={{
						uri: 'http://image.wufazhuce.com/FmQQjOVdFLgBxQzYI0T-H3Uo1fE7',
						cache: 'only-if-cached'
					}}
					style={{ flex: 1 }}
				/>
				<Text style={styles.title}>232131</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		height: 200,
		alignSelf: 'stretch',
		margin: 10,
		shadowColor: '#666',
		shadowOffset: {
			width: 30,
			height: 20
		},
		shadowRadius: 1,
		shadowOpacity: 0.8,
		elevation: 1,
	}
  ,title:{
    padding:10
  }
});

AppRegistry.registerComponent('Cover', () => Cover);
