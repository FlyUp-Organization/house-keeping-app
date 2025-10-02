import React from "react";
import { Image } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

interface Props {
  onFinish: () => void;
}

export default function AnimatedSplash({ onFinish }: Props) {
  return (
    <Animated.View
      entering={FadeIn.duration(800)}
      exiting={FadeOut.duration(500)}
      onLayout={() => {
        setTimeout(onFinish, 1500);
      }}
      className="absolute inset-0 bg-primary justify-center items-center z-50"
    >
      <Image
        source={require("@/assets/images/splash-screen.png")}
        resizeMode="contain"
      />
    </Animated.View>
  );
}
