import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
	return <View style={styles.parentStyle}>
		<View style={styles.viewOneStyle} />
		<View style={styles.viewTwoStyle} />
		<View style={styles.viewThreeStyle} />

	</View>
};

const styles = StyleSheet.create({
	parentStyle: {
		borderWidth: 3,
		borderColor: "black",
		flexDirection: "row",
		justifyContent: "space-between",
		height: 200,
	},
	viewOneStyle: {
		height: 50,
		width: 50,
		backgroundColor: "pink",
	},
	viewTwoStyle: {
		height: 50,
		width: 50,
		backgroundColor: "#66ff33",
		top: 50,
	},
	viewThreeStyle: {
		height: 50,
		width: 50,
		backgroundColor: "#9999ff",
	},
});

export default BoxScreen;
