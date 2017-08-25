import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { getUpcoming } from '../server/upcoming';
import { RkCard } from 'react-native-ui-kitten';

export default class HomeScreen extends Component {
	constructor(props) {
		super(props);
		this.state = { list: [] };
	}
	async componentWillMount() {
		const { results } = await getUpcoming();
		this.setState({ list: results });
	}
	render() {
		const list = this.state.list;
		return (
			<View style={{ alignSelf: 'stretch', height: 340 }}>
				{list.map(i =>
					<RkCard style={{ alignSelf: 'stretch', height: 340 }} key={i.id}>
						<View rkCardHeader>
							<Text>{i.title}</Text>
						</View>
						<Image
							rkCardImg
							source={{
								uri:
									'https://image.tmdb.org/t/p/w1000_and_h563_bestv2'+i.backdrop_path
							}}
							style={{ alignSelf: 'stretch', height: 240 }}
						/>
						<View rkCardContent>
							<Text>{i.overview}</Text>
						</View>
						<View rkCardFooter>
							<Text>Footer</Text>
						</View>
					</RkCard>
				)}
			</View>
		);
	}
}
const styles = StyleSheet.create({});
