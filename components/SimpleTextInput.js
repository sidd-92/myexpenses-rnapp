import React, { useState } from "react";
import { Pressable, StyleSheet, Text, View, TextInput } from "react-native";
import SimpleText from "./SimpleText";

const SimpleTextInput = ({ label, placeholder, value, onChangeHandler }) => {
	const [isFocused, setIsFocused] = useState(false);
	return (
		<View>
			<SimpleText size={14} label={label} />
			<TextInput
				onFocus={() => setIsFocused(true)}
				onBlur={() => setIsFocused(false)}
				style={[styles.input, { borderColor: isFocused ? "orangered" : "black" }]}
				onChangeText={onChangeHandler}
				value={value}
				selectionColor={"orangered"}
				placeholder={placeholder}
				keyboardType="default"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	input: {
		borderRadius: 8,
		borderWidth: 2,
		padding: 10,
		fontSize: 16,
		fontFamily: "Raleway_400Regular",
		marginTop: 4,
		marginBottom: 8,
	},
});

export default SimpleTextInput;
