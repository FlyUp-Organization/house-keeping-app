import React from "react";
import { Image, StyleSheet, ViewStyle } from "react-native";
import ThemedView from "../theme/components/ThemedView";
import { VisualSlide } from "@/core/onboarding/data/pageOneContent";

interface SlideItemProps {
  item: VisualSlide;
  index: number;
  width: number;
}

const SlideItemOne: React.FC<SlideItemProps> = ({ item, index, width }) => {
  const { img, bgColor } = item;
  const isMiddleColumn = index % 3 === 1;
  const height = (width * 5) / 3;

  const containerStyle: ViewStyle = {
    width,
    height,
    backgroundColor: bgColor ?? "transparent",
    marginTop: isMiddleColumn ? -20 : 0,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  };

  return (
    <ThemedView style={containerStyle}>
      {img && (
        <Image
          source={img}
          style={styles.image}
          resizeMode="cover"
        />
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default SlideItemOne;
