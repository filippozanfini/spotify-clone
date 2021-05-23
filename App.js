import React, { useState } from "react";
import Navigator from "./navigation/Navigator";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFonts = () => {
  return Font.loadAsync({
    "circular-bold": require("./assets/fonts/CircularStd-Bold.ttf"),
    "circular-book": require("./assets/fonts/CircularStd-Book.ttf"),
    "circular-medium": require("./assets/fonts/CircularStd-Medium.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return <Navigator />;
}
