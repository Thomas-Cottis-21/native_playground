import { useFonts } from "expo-font";
import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from "react-native-gesture-handler";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

    const [loaded] = useFonts({
        SourceCodePro: require('../assets/fonts/SourceCodePro-Regular.ttf'),
    });

    useEffect(() => {
       if (loaded) {
        SplashScreen.hideAsync();
       } 
    }, [loaded]);

    if (!loaded) {
        return null;
    }

    return (
        <GestureHandlerRootView>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
            </Stack>
        </GestureHandlerRootView>
    );
}