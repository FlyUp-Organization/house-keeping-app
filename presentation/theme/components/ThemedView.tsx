import React from "react";
import { useWindowDimensions, View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { tv } from "tailwind-variants";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: "primary" | "secondary";
  children?: React.ReactNode;
}
const themedView = tv({
  base: "flex-1",
  variants: {
    margin: {
      true: "mx-2.5",
    },
    bgColor: {
      primary: "bg-primary",
      secondary: "bg-secondary",
    },
  },
  defaultVariants: {
    margin: false,
  },
});

const ThemedView = ({
  style,
  className = "",
  margin = false,
  safe = false,
  bgColor = "secondary",
  children,
  ...rest
}: Props) => {
  const insets = useSafeAreaInsets();
  const paddingTop = safe ? insets.top : 0;

  return (
    <View
      style={[{ paddingTop }, style]}
      className={themedView({ margin, bgColor, className })}
      {...rest}
    >
      {children}
    </View>
  );
};

export default ThemedView;
