import React, { useState } from "react";
import { Text, View } from "react-native";
import SimpleText from "../components/SimpleText";

function MyWardrobeScreen({ route, navigation }) {
	const [wardrobes, setWardrobes] = useState([]);
	const { type } = route.params;

	switch (type) {
		case "create":
			return (
				<View>
					<SimpleText type={600} label={"New Wardrobe"} size={20} align={"center"} />
				</View>
			);

		default:
			return (
				<View>
					<Text style={{ fontFamily: "Raleway_500Medium", fontSize: 40 }}>Raleway_500Medium</Text>
				</View>
			);
	}
}

export default MyWardrobeScreen;
