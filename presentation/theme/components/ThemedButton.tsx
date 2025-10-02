import { Pressable, PressableProps } from "react-native";
import { tv } from "tailwind-variants";
import { ThemedText } from "./ThemedText";

const button = tv({
  base: "items-center rounded-xl px-6 py-2 active:opacity-80",
  variants: {
    background: {
      true: "bg-primary",
      false: "",
    },
  },
});

interface Props extends PressableProps {
  className?: string;
  children: string;
  background?: boolean;
}

const ThemedButton = ({
  className = "",
  background = false,
  children,
  ...rest
}: Props) => {
  return (
    <Pressable className={button({ background, className })} {...rest}>
      <ThemedText
        font="GilroyMedium"
        textColor={background ? "white" : "black"} 
      >
        {children}
      </ThemedText>
    </Pressable>
  );
};

export default ThemedButton;
