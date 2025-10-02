import { useEffect, useState } from "react";
import { router } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator, View } from "react-native";



export default function Index() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIfOnboardingSeen = async () => {
      try {
        const hasSeenOnboarding = await AsyncStorage.getItem("hasSeenOnboarding");

        if (hasSeenOnboarding === "true") {
          router.replace("/auth");
        } else {
          router.replace("/onboarding");
        }
      } catch (error) {
        console.error("Error checking onboarding status:", error);
        router.replace("/auth"); 
      } finally {
        setLoading(false);
      }
    };

    checkIfOnboardingSeen();
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return null;
}
