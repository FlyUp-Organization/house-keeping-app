import { StyleProp, Text, TextProps, TextStyle } from "react-native";
import { tv } from "tailwind-variants";

const textStyles = tv({
  base: "font-normal",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
    },
    textColor: {
      white: "text-secondary",
      black: "text-primary",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
    textColor: "black",
  },
});

type Props = TextProps & {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  textColor?: "white" | "black";
  font?: "GilroyMedium" | "GilroySemiBold" | "GilroyBold";
  textAlign?: "left" | "center" | "right"; 
};

export function ThemedText({
  size,
  textColor,
  font = "GilroyMedium",
  textAlign = "left",
  style,
  ...rest
}: Props) {
  const combinedStyle: StyleProp<TextStyle> = [
    { fontFamily: font, textAlign },
    style,
  ];

  return (
    <Text
      {...rest}
      className={textStyles({ size, textColor })}
      style={combinedStyle}
    />
  );
}
