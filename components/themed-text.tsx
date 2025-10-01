import { Fonts } from "@/constants/theme";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Text as RNText, TextProps } from "react-native";
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
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "md",
    weight: "normal",
  },
});

type Props = TextProps & {
  size?: "sm" | "md" | "lg" | "xl" | "2xl";
  weight?: "normal" | "medium" | "bold";
  font?: keyof typeof Fonts;
  lightColor?: string;
  darkColor?: string;
};

export function ThemedText({
  size,
  weight,
  style,
  font = "dancing",
  lightColor,
  darkColor,
  ...rest
}: Props) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <RNText
      {...rest}
      style={[{ color, fontFamily: Fonts[font] }, style]}
      className={textStyles({ size, weight })}
    />
  );
}
