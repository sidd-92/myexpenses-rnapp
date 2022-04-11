import { Text, View } from "react-native";

/**
 *
 * @param {*} props.type 100 | 200 | 500 | 600 | 700 | 800 | 900
 * @param {*} props.size Font Size
 * @param {*} props.label Text To Show
 * @returns Text Component
 */
export default function SimpleText({ type, size, label }) {
	let font = "Raleway_400Regular";
	if (type == 100) {
		font = "Raleway_100Thin";
	} else if (type == 200) {
		font = "Raleway_200ExtraLight";
	} else if (type == 500) {
		font = "Raleway_500Medium";
	} else if (type == 600) {
		font = "Raleway_600SemiBold";
	} else if (type == 700) {
		font = "Raleway_700Bold";
	} else if (type == 800) {
		font = "Raleway_800ExtraBold";
	} else if (type == 900) {
		font = "Raleway_900Black";
	}
	return (
		<View>
			<Text style={{ fontFamily: font, fontSize: size }}>{label}</Text>
		</View>
	);
}
