import { ThemedText } from "@/presentation/theme/components/ThemedText";
import React from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

export default function index() {
  return (
    <KeyboardAvoidingView behavior="padding" className="flex-1">
      <ScrollView>
        {/* <FlatList data={}></FlatList> */}
        <ThemedText>Hola fsfwfwfwefweffsdfsdfdswfwfwfwfwf</ThemedText>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
