import React from "react";
import { SafeAreaView } from "react-native";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { SafeAreaProvider } from "react-native-safe-area-context/src/SafeAreaContext";

export const decorators = [
  (StoryFn) => (
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, marginBottom: 80 }}>
          <StoryFn />
        </SafeAreaView>
      </SafeAreaProvider>
    </BottomSheetModalProvider>
  ),
];

export const parameters = {
};
