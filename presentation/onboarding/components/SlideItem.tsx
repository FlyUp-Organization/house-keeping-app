import { Slide } from "@/core/onboarding/interface/slide";
import { ThemedText } from "@/presentation/theme/components/ThemedText";
import ThemedView from "@/presentation/theme/components/ThemedView";
import { Image, useWindowDimensions } from "react-native";

interface SlideItemProps {
  item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
  const { width } = useWindowDimensions();
  const { title, desc, img } = item;

  return (
    <ThemedView className="justify-start" style={{ width }}>
      <Image
        source={img}
        style={{
          width: width,
          height: "65%",
          resizeMode: "contain",
          alignSelf: "center",
        }}
      />
      <ThemedView
        className="gap-3 mt-4"
        style={{
          flex: 1,
          paddingHorizontal: 20,
        }}
      >
        <ThemedText textAlign="center" size="2xl" font="GilroyBold">
          {title}
        </ThemedText>

        <ThemedText size="xl" font="GilroyMedium" textAlign="center">
          {desc}
        </ThemedText>
      </ThemedView>
    </ThemedView>
  );
};

export default SlideItem;
