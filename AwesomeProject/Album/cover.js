import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Text, Image } from 'react-native';
import { RkCard } from 'react-native-ui-kitten';
export default class Cover extends Component {
	render() {
		const { title, img_url, forward } = this.props.data;
		return (
			<RkCard style={styles.container}>
				<View rkCardHeader>
					<Text>
						{title}
					</Text>
				</View>
				<Image
					rkCardImg
					source={{
						uri: img_url,
						cache: 'only-if-cached'
					}}
				/>
				<View rkCardContent>
					<Text ellipsizeMode='tail' numberOfLines={2}>
						{forward}
					</Text>
				</View>
			</RkCard>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignSelf: 'stretch',
		height: 300,
		marginTop: 5,
		marginLeft: 5,
		marginRight: 5
	}
});
