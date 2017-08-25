import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './js/page/homescreen';

const WakaFilm = StackNavigator({
	Home: { screen: HomeScreen }
});
AppRegistry.registerComponent('wakaFilm', () => WakaFilm);
