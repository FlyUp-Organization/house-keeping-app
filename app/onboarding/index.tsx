// IndexScreen.tsx
import { onboardingItems } from "@/core/onboarding/data/onboardingData";
import React, { useRef, useState } from "react";
import {
  Dimensions,
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  StyleSheet,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isScrollEnabled, setIsScrollEnabled] = useState(false);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isScrollEnabled) {
      return;
    }

    const { contentOffset, layoutMeasurement } = event.nativeEvent;

    const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

    setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);

    if (currentIndex === onboardingItems.length - 1) {
      setIsScrollEnabled(true);
    }
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;

    flatListRef.current.scrollToIndex({
      index: index,
      animated: true,
    });
  };
  return (
    <FlatList
      ref={flatListRef}
      data={onboardingItems}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      onScroll={onScroll}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => {
        const Component = item.component;
        return (
          <View style={{ backgroundColor: "red", flex: 1 }}>
            <Component />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SlidesScreen;
