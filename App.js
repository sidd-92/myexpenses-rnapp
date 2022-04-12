import {
	Raleway_100Thin,
	Raleway_200ExtraLight,
	Raleway_400Regular,
	Raleway_500Medium,
	Raleway_600SemiBold,
	Raleway_700Bold,
	Raleway_800ExtraBold,
	Raleway_900Black,
	useFonts,
} from "@expo-google-fonts/raleway";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { Button, Pressable, StyleSheet, Text, Image, View } from "react-native";
import SimpleText from "./components/SimpleText";
import SimpleButton from "./components/SimpleButton";
import * as SplashScreen from "expo-splash-screen";

const Stack = createNativeStackNavigator();

function setHeaderOptions(title, headerRightHandler) {
	return {
		title: title,
		headerStyle: {
			backgroundColor: "#d90429",
		},
		headerRight: headerRightHandler,
		headerTintColor: "#edf2f4",
		headerTitleStyle: {
			fontFamily: "Raleway_900Black",
			fontSize: 22,
		},
	};
}

export default function App() {
	let [userLoggedIn, setUserLoggedIn] = useState(true);
	const [appIsReady, setAppIsReady] = useState(false);
	let [fontsLoaded] = useFonts({
		Raleway_100Thin,
		Raleway_200ExtraLight,
		Raleway_400Regular,
		Raleway_500Medium,
		Raleway_600SemiBold,
		Raleway_700Bold,
		Raleway_800ExtraBold,
		Raleway_900Black,
	});

	useEffect(() => {
		async function prepare() {
			try {
				// Keep the splash screen visible while we fetch resources
				await SplashScreen.preventAutoHideAsync();
				// Artificially delay for two seconds to simulate a slow loading
				// experience. Please remove this if you copy and paste the code!
				await new Promise((resolve) => setTimeout(resolve, 2000));
			} catch (e) {
				console.warn(e);
			} finally {
				// Tell the application to render
				setAppIsReady(true);
			}
		}

		prepare();
	}, []);

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady && fontsLoaded) {
			// This tells the splash screen to hide immediately! If we call this after
			// `setAppIsReady`, then we may see a blank screen while the app is
			// loading its initial state and rendering its first pixels. So instead,
			// we hide the splash screen once we know the root view has already
			// performed layout.
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	if (!appIsReady) {
		return null;
	}

	return (
		<NavigationContainer onReady={onLayoutRootView}>
			{!userLoggedIn ? (
				<Stack.Navigator>
					<Stack.Screen options={{ headerShown: false }} name="Login / Sign Up" component={AuthScreen} />
				</Stack.Navigator>
			) : (
				<Stack.Navigator>
					<Stack.Screen
						options={({ navigation }) => setHeaderOptions("Dashboard")}
						name="Home"
						component={HomeScreen}
					/>
					<Stack.Screen
						options={({ navigation }) => setHeaderOptions("My Wardrobe")}
						name="Wardrobe"
						component={MyWardrobeScreen}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
}

function MyWardrobeScreen() {
	return (
		<View>
			<Text style={{ fontFamily: "Raleway_500Medium", fontSize: 40 }}>Raleway_500Medium</Text>
		</View>
	);
}

function AuthScreen() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				options={({ navigation }) =>
					setHeaderOptions("Login", () => (
						<Button onPress={() => navigation.navigate("SignUp")} title="SignUp" color="#2b2d42" />
					))
				}
				name="Login"
				component={LoginScreen}
			/>
			<Stack.Screen options={({ navigation }) => setHeaderOptions("")} name="SignUp" component={SignupScreen} />
		</Stack.Navigator>
	);
}

function LoginScreen() {
	return (
		<View>
			<Text style={{ fontFamily: "Raleway_500Medium", fontSize: 40 }}>Login</Text>
		</View>
	);
}

function SignupScreen() {
	return (
		<View>
			<Text style={{ fontFamily: "Raleway_500Medium", fontSize: 40 }}>SignUp</Text>
		</View>
	);
}

function HomeScreen({ navigation }) {
	const [number, onChangeNumber] = useState(null);
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
					<Image style={styles.stretch} source={require("./assets/empty.jpg")} />
					<SimpleButton width={300} buttonText={"Add Wardrobe"} />
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
