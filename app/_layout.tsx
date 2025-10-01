import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import "react-native-reanimated";
import {
  useFonts,
  DancingScript_400Regular,
} from "@expo-google-fonts/dancing-script";

import "./global.css";
import { useColorScheme } from "@/hooks/use-color-scheme";
import { ThemedText } from "@/components/themed-text";
import { StatusBar, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect } from "react";
import { SplashScreen } from "expo-router";

export const unstable_settings = {
  anchor: "(tabs)",
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  const [loaded, error] = useFonts({
    DancingRegular: DancingScript_400Regular, 
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-black">
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <StatusBar
          barStyle={colorScheme === "dark" ? "light-content" : "dark-content"}
        />
        <Text className="text-white" style={{ fontFamily: "DancingRegular" }}>
          Hola
        </Text>
        <ThemedText size="2xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <ThemedText font="dancing" className="top-40" size="xl" >
          Hola munduudahd ff
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="normal">
          Hola munduudahd ffada
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <ThemedText className="top-40" size="xl" weight="bold">
          Hola munduudahd ff
        </ThemedText>
        <Text>Hola</Text>
      </ThemeProvider>
    </SafeAreaView>
  );
}
