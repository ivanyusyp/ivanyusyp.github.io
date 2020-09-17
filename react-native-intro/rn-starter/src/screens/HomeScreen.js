import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import TextScreen from "./TextScreen";

const HomeScreen = ({ navigation }) => {
	return <View>
		<Text style={styles.text}>Hi There!</Text>
		<Button
			onPress={() => navigation.navigate('Components')}
			title="Go to Components Demo"
		/>
		<Button
			title="Go to list Demo"
			onPress={() => navigation.navigate('List')}
		/>
		<Button
			title='Go to Image Component'
			onPress={() => navigation.navigate('Image')}
		/>
		<Button
			title='Go to Counter Demo'
			onPress={() => navigation.navigate('Counter')}
		/>
		<Button
			title='Go to Color Demo'
			onPress={() => navigation.navigate('Color')}
		/>
		<Button
			title='Go to Square Demo'
			onPress={() => navigation.navigate('Square')}
		/>
		<Button
			title='Go to Text Demo'
			onPress={() => navigation.navigate('Text')}
		/>
	</View>
};

const styles = StyleSheet.create({
	text: {
		fontSize: 30
	}
});

export default HomeScreen;




