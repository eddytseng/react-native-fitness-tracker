import React from 'react';
import { Slider, View, Text, StyleSheet } from 'react-native';
import { gray } from '../utils/colors';

export default function UdaciSlider({ max, unit, value, step, onChange }) {
	return (
		<View style={[styles.row, { justifyContent: 'space-between' }]}>
			<Slider
				style={{ flex: 1 }}
				minimumValue={0}
				maximumValue={max}
				step={step}
				value={value}
				onValueChange={onChange}
			/>
			<View style={styles.metricCounter}>
				<Text style={{ fontSize: 24, textAlign: 'center' }}>{value}</Text>
				<Text style={{ fontSize: 18, color: gray }}>{unit}</Text>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	row: {
		alignItems: 'center',
		flex: 1,
		flexDirection: 'row',
	},
	metricCounter: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 85
	}
})