import React, { useState } from 'react';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Dimensions, SafeAreaView, useColorScheme } from "react-native";

import { Page, pageSelection } from "./src/types";
import PageSelector from "./src/components/PageSelector";
import { Colors } from "react-native/Libraries/NewAppScreen";
import BouncingBall from "./src/screens/BouncingBall";

const pages: Page[] = [
  {name: "Bouncing ball"}
]

function App(): JSX.Element {
  const [selectedPage, setSelectedPage] = useState<pageSelection>("Bouncing ball");

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    height: Dimensions.get("screen").height,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const handlePageSelection = (selection: pageSelection) => {
    setSelectedPage(selection);
  }

  const renderSelectedPage = () => {
    switch (selectedPage) {
      case "Bouncing ball":
        return <BouncingBall backgroundStyle={backgroundStyle} />
    }
  }

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={backgroundStyle}>
        {renderSelectedPage()}
        <PageSelector
          style={{
            bottom: 0,
            position: "absolute",
          }}
          pages={pages}
          selectedPage={selectedPage}
          onPageSelect={handlePageSelection}
        />
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
