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
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect, useCallback } from "react";
import { Button, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import SimpleText from "./components/SimpleText";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";

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
						options={({ navigation }) =>
							setHeaderOptions("Home", () => (
								<Pressable
									android_ripple={{ color: "white" }}
									style={{ backgroundColor: "#2b2d42", padding: 6 }}
									onPress={() => navigation.navigate("About")}
								>
									<Text style={{ color: "white" }}>About</Text>
								</Pressable>
							))
						}
						name="Home"
						component={HomeScreen}
					/>
					<Stack.Screen
						options={({ navigation }) => setHeaderOptions("About")}
						name="About"
						component={AboutMeScreen}
					/>
				</Stack.Navigator>
			)}
		</NavigationContainer>
	);
}

function AboutMeScreen() {
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
	const [isFocused, setIsFocused] = useState(false);
	return (
		<View style={styles.container}>
			<ScrollView contentContainerStyle={styles.contentContainer}>
				<SimpleText size={24} label="It Works" />
				<TextInput
					onFocus={() => setIsFocused(true)}
					onBlur={() => setIsFocused(false)}
					style={[styles.input, { borderColor: isFocused ? "orangered" : "black" }]}
					onChangeText={onChangeNumber}
					value={number}
					selectionColor={"orangered"}
					placeholder="useless placeholder"
					keyboardType="default"
				/>
			</ScrollView>

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
	input: {
		borderRadius: 8,
		margin: 10,
		borderWidth: 2,
		padding: 10,
		fontSize: 16,
		fontFamily: "Raleway_400Regular",
	},
});
