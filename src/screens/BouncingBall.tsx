import { Dimensions, TextInput, View } from "react-native";
import React, { useState } from "react";

import Circle from "../components/Circle";
import { BLUEISH } from "../styles/colors";

type BouncingBallProps = {
  backgroundStyle: any,
}

const BouncingBall = (props: BouncingBallProps) => {
  const { backgroundStyle } = props;

  const [color, setColor] = useState(BLUEISH);

  return (
    <View style={{
      ...backgroundStyle,
      display: "flex",
      marginTop: -20,
    }}>
      <Circle limits={{x: Dimensions.get("screen").width, y: Dimensions.get("screen").height}} radius={50}
              color={color}/>
      <TextInput
        style={{
          marginLeft: 20,
          marginBottom: 8,
          marginTop: 20,
        }}
        value={color}
        onChangeText={setColor}>
      </TextInput>
    </View>
  )
}

export default BouncingBall;
