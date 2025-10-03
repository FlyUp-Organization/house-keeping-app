import { slides } from "@/core/onboarding/data/onboardingData";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedView from "@/presentation/theme/components/ThemedView";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from "react-native";

const { width } = Dimensions.get("window");

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(event.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <ThemedView safe>
      <FlatList
        ref={flatListRef}
        data={slides}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        renderItem={({ item }) => {
          const Component = item.component; 
          return (
            <View style={{ width }}>
              <Component />
            </View>
          );
        }}
      />

      <ThemedView className="flex-row justify-center mb-20">
        {slides.map((_, i) => (
          <View
            key={i}
            className={`w-2 h-2 mx-1 rounded-full ${
              i === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </ThemedView>

      <TouchableOpacity style={styles.skipButton}>
        <ThemedText font="GilroySemiBold">Omitir</ThemedText>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  skipButton: {
    alignSelf: "center",
    marginBottom: 30,
  },
});
