import React, { useState } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const CounterScreen = () => {
	const [coutner, setCounter] = useState(0);

	return (
		<View>
			<Button
				title="Increase"
				onPress={() => {
					setCounter(coutner + 1);
				}}
			/>
			<Button
				title="Decrease"
				onPress={() => {
					setCounter(coutner - 1);
				}}
			/>
			<Text>Current Count:{coutner}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default CounterScreen;
