import { ImageSourcePropType } from "react-native";

export interface VisualSlide {
  id: string;
  img?: ImageSourcePropType;
  bgColor?: string;
  offsetTop?: boolean;
}

export const items: VisualSlide[] = [
  {
    id: "1",
    bgColor: "#00CFFF",
  },
  {
    id: "2",
    bgColor: "#000",
  },
  {
    id: "3",
    img: require("@/assets/images/onboarding/slide1/slide-6.png"),
  },
  {
    id: "4",
    img: require("@/assets/images/onboarding/slide1/slide-5.png"),
    offsetTop: true,
  },
  {
    id: "5",
    img: require("@/assets/images/onboarding/slide1/slide-4.png"),
  },
  {
    id: "6",
    img: require("@/assets/images/onboarding/slide1/slide-3.png"),
  },
  {
    id: "7",
    img: require("@/assets/images/onboarding/slide1/slide-1.png"),
  },
  {
    id: "8",
    img: require("@/assets/images/onboarding/slide1/slide-2.jpg"),
  },
  {
    id: "9",
    bgColor: "#000",
  },
];
