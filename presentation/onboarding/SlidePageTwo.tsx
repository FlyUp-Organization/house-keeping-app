import { items } from "@/core/onboarding/data/pageOneContent";
import React from "react";
import { Dimensions, FlatList, Image, ViewStyle } from "react-native";
import ThemedView from "../theme/components/ThemedView";

const { width } = Dimensions.get("window");

const SlidePageTwo = () => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={({ item, index }) => {
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
                className="w-full h-full"
                resizeMode="cover"
              />
            )}
          </ThemedView>
        );
      }}
    />
  );
};

export default SlidePageTwo;
