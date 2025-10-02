// import { useThemeColor } from "@/hooks/use-theme-color";
// import * as TablerIcons from "@tabler/icons-react";
// import React, { useRef, useState } from "react";
// import {
//   StyleProp,
//   StyleSheet,
//   TextInput,
//   TextInputProps,
//   View,
//   ViewStyle,
// } from "react-native";

// interface Props extends TextInputProps {
//   iconName?: keyof typeof TablerIcons;
//   containerStyle?: StyleProp<ViewStyle>;
// }

// const ThemedTextInput = ({ iconName, style, ...rest }: Props) => {
//   const primaryColor = useThemeColor({}, "primary");
//   const textColor = useThemeColor({}, "text");

//   const [isActive, setIsActive] = useState(false);
//   const inputRef = useRef<TextInput>(null);

//   const IconComponent = iconName
//     ? (TablerIcons[iconName] as React.ElementType)
//     : null;

//   return (
//     <View
//       style={[
//         styles.container,
//         { borderColor: isActive ? primaryColor : "#ccc" },
//         style,
//       ]}
//       onTouchStart={() => inputRef.current?.focus()}
//     >
//       {IconComponent && (
//         <IconComponent size={24} color={textColor} style={styles.icon} />
//       )}

//       <TextInput
//         ref={inputRef}
//         placeholderTextColor="#5c5c5c"
//         onFocus={() => setIsActive(true)}
//         onBlur={() => setIsActive(false)}
//         style={[styles.input, { color: textColor }]}
//         {...rest}
//       />
//     </View>
//   );
// };

// export default ThemedTextInput;

// const styles = StyleSheet.create({
//   container: {
//     borderWidth: 1,
//     borderRadius: 5,
//     padding: 10,
//     marginBottom: 10,
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   icon: {
//     marginRight: 10,
//   },
//   input: {
//     flex: 1,
//     marginRight: 10,
//   },
// });

import { useThemeColor } from "@/hooks/use-theme-color";
import * as TablerIcons from "@tabler/icons-react";
import React, { useRef, useState } from "react";
import { TextInput, TextInputProps, View } from "react-native";

interface Props extends TextInputProps {
  icon?: keyof typeof TablerIcons;
}

export default function ThemedInput({ icon, style, ...rest }: Props) {
  const [isActive, setIsActive] = useState(false);
  const textColor = useThemeColor({}, "text");

  const inputRef = useRef<TextInput>(null);

  return (
    <View
      onTouchStart={() => inputRef.current?.focus()}
      className={`border-1 border-r-4 p-10 mb-10 flex flex-row items-center`}
    >
      <TextInput
        ref={inputRef}
        className={`${textColor} mr-10 flex-1`}
        placeholderTextColor="#5c5c5c"
        onFocus={() => setIsActive(true)}
        onBlur={() => setIsActive(false)}
        {...rest}
      />
    </View>
  );
}
