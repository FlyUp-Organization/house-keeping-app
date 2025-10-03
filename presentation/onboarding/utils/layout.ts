import { Dimensions, ViewStyle } from "react-native";

const { width } = Dimensions.get("window");

export const NUM_COLUMNS = 3;
export const ITEM_SIZE = width / NUM_COLUMNS - 10;

export const getContainerStyle = (
  index: number,
  bgColor?: string
): ViewStyle => {
  const isMiddleColumn = index % NUM_COLUMNS === 1;

  return {
    width: ITEM_SIZE,
    height: ITEM_SIZE * 1.2,
    backgroundColor: bgColor ?? "transparent",
    marginTop: isMiddleColumn ? -20 : 0,
    borderRadius: 10,
    overflow: "hidden",
    margin: 5,
  };
};
