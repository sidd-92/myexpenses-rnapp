import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, Image, View } from "react-native";
import SimpleButton from "../components/SimpleButton";
import SimpleText from "../components/SimpleText";

function DashboardScreen({ navigation }) {
	const [wardrobes, setWardrobes] = useState([]);
	return (
		<View style={styles.container}>
			{wardrobes.length > 0 ? (
				<SimpleText size={24} label="You Have Wardrobes" />
			) : (
				<View style={styles.centerContent}>
					<SimpleText
						size={28}
						align="center"
						type={800}
						marginBottom={40}
						label="Oops ! You dont have a wardrobe"
					/>
					<Image style={styles.stretch} source={require("../assets/empty.jpg")} />
					<SimpleButton
						width={300}
						buttonText={"Add Wardrobe"}
						buttonHandler={() => navigation.navigate("Wardrobe", { type: "create" })}
					/>
				</View>
			)}

			<StatusBar style="light" />
		</View>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		backgroundColor: "transparent",
	},
	container: {
		flex: 1,
		backgroundColor: "#edf2f4",
		paddingTop: 10,
	},
	stretch: {
		width: 400,
		height: 200,
		resizeMode: "contain",
		marginBottom: 40,
	},
	centerContent: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 10,
	},
});

export default DashboardScreen;
