import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
	useFonts,
	Oswald_200ExtraLight,
	Oswald_300Light,
	Oswald_400Regular,
	Oswald_500Medium,
	Oswald_600SemiBold,
	Oswald_700Bold,
} from "@expo-google-fonts/oswald";

import {
	Raleway_100Thin,
	Raleway_100Thin_Italic,
	Raleway_200ExtraLight,
	Raleway_200ExtraLight_Italic,
	Raleway_300Light,
	Raleway_300Light_Italic,
	Raleway_400Regular,
	Raleway_400Regular_Italic,
	Raleway_500Medium,
	Raleway_500Medium_Italic,
	Raleway_600SemiBold,
	Raleway_600SemiBold_Italic,
	Raleway_700Bold,
	Raleway_700Bold_Italic,
	Raleway_800ExtraBold,
	Raleway_800ExtraBold_Italic,
	Raleway_900Black,
	Raleway_900Black_Italic,
} from "@expo-google-fonts/raleway";
const Stack = createNativeStackNavigator();
export default function App() {
	let [fontsLoaded] = useFonts({
		Oswald_200ExtraLight,
		Oswald_300Light,
		Oswald_400Regular,
		Oswald_500Medium,
		Oswald_600SemiBold,
		Oswald_700Bold,
		Raleway_200ExtraLight,
		Raleway_100Thin,
		Raleway_500Medium,
		Raleway_600SemiBold,
		Raleway_700Bold,
		Raleway_800ExtraBold,
		Raleway_900Black,
	});

	if (!fontsLoaded) {
		return (
			<View>
				<Text>Loading....</Text>
			</View>
		);
	}

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{
						title: "My Home",
						headerStyle: {
							backgroundColor: "#f4511e",
						},
						headerTintColor: "#fff",
						headerTitleStyle: {
							fontFamily: "Raleway_900Black",
						},
					}}
					name="Home"
					component={HomeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

function HomeScreen() {
	return (
		<ScrollView contentContainerStyle={styles.contentContainer}>
			<Text style={{ fontFamily: "Oswald_500Medium", fontSize: 40 }}>Oswald_500Medium</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Oswald_500Medium", fontSize: 40 }}>Oswald_500Medium</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
			<Text style={{ fontFamily: "Raleway_100Thin", fontSize: 40 }}>Raleway_100Thin</Text>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	contentContainer: {
		paddingVertical: 10,
		marginHorizontal: 10,
	},
});
