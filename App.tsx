import {
  View,
  TextInput,
  StatusBar,
  Dimensions,
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import Circle from "./src/components/Circle";
import { GestureHandlerRootView } from "react-native-gesture-handler";

function App(): JSX.Element {
  const [color, setColor] = useState("#0072a8");

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    height: Dimensions.get("screen").height,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <GestureHandlerRootView>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />
        <View style={{
          ...backgroundStyle,
          display: "flex",
        }}>
          <Circle limits={{x: Dimensions.get("screen").width, y: Dimensions.get("screen").height}} radius={50}
                  color={color}/>
          <TextInput
            style={{
              marginLeft: 20,
              marginBottom: 8,
            }}
            value={color}
            onChangeText={setColor}>
          </TextInput>
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
}

export default App;
