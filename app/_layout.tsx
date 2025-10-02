import AnimatedSplash from "@/presentation/theme/components/ui/AnimatedSplash";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import "./global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [showSplash, setShowSplash] = useState(true);

  const [loaded, error] = useFonts({
    GilroyBold: require("../assets/fonts/Gilroy-Bold.ttf"),
    GilroyMedium: require("../assets/fonts/Gilroy-Medium.ttf"),
    GilroySemiBold: require("../assets/fonts/Gilroy-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      const prepare = async () => {
        await SplashScreen.hideAsync();
      };

      prepare();
    }
  }, [loaded, error]);

  return (
    <GestureHandlerRootView>
      <StatusBar barStyle={"dark-content"} />
      {showSplash ? (
        <AnimatedSplash onFinish={() => setShowSplash(false)} />
      ) : (
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        ></Stack>
      )}
    </GestureHandlerRootView>
  );
}
