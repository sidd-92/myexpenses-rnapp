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
import * as SplashScreen from "expo-splash-screen";
import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import DashboardScreen from "./views/Dashboard";
import MyWardrobeScreen from "./views/MyWardrobe";

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
			fontSize: 18,
		},
	};
}

export default function App() {
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
			<Stack.Navigator>
				<Stack.Screen
					options={({ navigation }) => setHeaderOptions("Dashboard")}
					name="Home"
					component={DashboardScreen}
				/>
				<Stack.Screen
					options={({ route, navigation }) => {
						console.log(route.params["type"]);
						if (route.params["type"] == "create") {
							return setHeaderOptions("Add New Wardrobe");
						} else {
							return setHeaderOptions("My Wardrobe");
						}
					}}
					name="Wardrobe"
					component={MyWardrobeScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
