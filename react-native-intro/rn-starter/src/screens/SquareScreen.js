import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColourCounter from '../components/ColourCounter';

const COLOR_INCREMENT = 15;

const SquareScreen = () => {
	const [red, setRed] = useState(0);
	const [green, setGreen] = useState(0);
	const [blue, setBlue] = useState(0);

	const setColour = (color) => {
		//color === 'red', 'green','blue'
		// change === +15, -15

		if (color === 'red') {
			if (red + change > 255 || red + change < 0) {
				return;
			} else {
				setRed(red + change);
			}
		}
	}

	return (
		<View>
			<ColourCounter
				onIncrease={() => setColour('red', COLOR_INCREMENT)}
				onDecrease={() => setColour('red', -1 * COLOR_INCREMENT)}
				color="Red" />
			<ColourCounter
				onIncrease={() => setGreen(green + COLOR_INCREMENT)}
				onDecrease={() => setGreen(green - COLOR_INCREMENT)}
				color="Green"
			/>
			<ColourCounter
				onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
				onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
				color="Blue"
			/>
			<View
				style={{
					height: 150,
					width: 150,
					backgroundColor: `rgb(${red},${green},${blue})`
				}}
			/>
		</View>
	);
};

const styles = StyleSheet.create({});

export default SquareScreen;

