import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { purple } from '../utils/colors';

export default function TextButton ({ children, onPress, style = {} }) {
	return (
		<TouchableOpacity onPress={onPress}>{children}
			<Text style={[styles.reset, style]}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	reset: {
		backgroundColor: purple,
		textAlign: 'center',
	}
})