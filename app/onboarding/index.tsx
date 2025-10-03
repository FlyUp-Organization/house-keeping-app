import { items } from "@/core/onboarding/data/slide-data";
import SlideItem from "@/presentation/onboarding/components/SlideItem";
import ThemedButton from "@/presentation/theme/components/ThemedButton";
import ThemedView from "@/presentation/theme/components/ThemedView";
import { router } from "expo-router";
import { useRef, useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const SlidesScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, layoutMeasurement } = event.nativeEvent;
    const index = Math.round(contentOffset.x / layoutMeasurement.width);
    setCurrentSlideIndex(index);
  };

  const scrollToSlide = (index: number) => {
    if (!flatListRef.current) return;
    flatListRef.current.scrollToIndex({ index, animated: true });
  };

  return (
    <ThemedView style={{ flex: 1 }}>
      {/* FlatList */}
      <FlatList
        ref={flatListRef}
        data={items}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => <SlideItem item={item} />}
        showsHorizontalScrollIndicator={false}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        scrollEventThrottle={16} // importante para actualizar con fluidez
      />

      {/* Dots */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 20,
        }}
      >
        {items.map((_, i) => (
          <View
            key={i}
            style={{
             
              width: currentSlideIndex === i ? 12 : 8,
              height: currentSlideIndex === i ? 12 : 8,
              borderRadius: 6,
              backgroundColor: currentSlideIndex === i ? "#2a9d8f" : "#ccc",
              marginHorizontal: 4,
            }}
          />
        ))}
      </View>

      {/* Botón */}
      <ThemedButton
        className="absolute bottom-10 right-2"
        onPress={() =>
          currentSlideIndex === items.length - 1
            ? router.dismiss()
            : scrollToSlide(currentSlideIndex + 1)
        }
      >
        Omitir
      </ThemedButton>
    </ThemedView>
  );
};

export default SlidesScreen;
