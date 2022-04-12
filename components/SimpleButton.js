import { Pressable, StyleSheet, Text } from "react-native";
import { useEffect } from "react/cjs/react.development";
import SimpleText from "./SimpleText";

const SimpleButton = ({ buttonHandler, buttonText, width }) => {
	return (
		<Pressable style={[styles.button, { width: width }]} android_ripple={{ color: "#000" }} onPress={buttonHandler}>
			<SimpleText color="white" align="center" type={600} size={14} label={buttonText} />
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		backgroundColor: "#2b2d42",
		padding: 10,
		borderRadius: 8,
		elevation: 4,
	},
});

export default SimpleButton;
