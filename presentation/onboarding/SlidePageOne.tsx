import { items } from "@/core/onboarding/data/pageOneContent";
import React from "react";
import { Dimensions, FlatList, Image, ViewStyle } from "react-native";
import ThemedView from "../theme/components/ThemedView";

const { width } = Dimensions.get("window");

const SlidePageOne = () => {
  return (
    <FlatList
      data={items}
      keyExtractor={(item) => item.id}
      numColumns={3}
      renderItem={({ item, index }) => {
        const { img, bgColor } = item;

        const itemSize = width / 3 - 10;

        const isMiddleColumn = index % 3 === 1;

        const containerStyle: ViewStyle = {
          width: itemSize,
          height: itemSize * 1.2,
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

export default SlidePageOne;
