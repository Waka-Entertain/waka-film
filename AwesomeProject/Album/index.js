import List from './list';
import React, { Component } from 'react';
import { View, AppRegistry, StyleSheet, Text, Image } from 'react-native';
import { GET } from '../config/index';
export default class Album extends Component {
	constructor(props) {
		super(props);
		this.state = {
			contentList: [] //每日内容列表
		};
	}
	componentWillMount() {
		this._fetchAlbum();
	}
	async _fetchAlbum() {
		let data = await GET(
			'http://v3.wufazhuce.com:8000/api/onelist/3528/0?channel=wdj&version=4.0.2&uuid=ffffffff-a90e-706a-63f7-ccf973aae5ee&platform=android'
		);
		console.log(data)
		this.setState(prevState => ({
			...prevState,
			contentList: data.content_list
		}));
	}
	render() {
		const contentList = this.state.contentList;
		return (
			<View>
				<List data={contentList} />
				<Text>sdfs</Text>
			</View>
		);
	}
}
