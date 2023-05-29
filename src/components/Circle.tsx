import React from "react";
import { Text } from "react-native";
import Animated, {
  withDecay,
  useSharedValue,
  useAnimatedStyle,
  useAnimatedGestureHandler, withSpring,
} from "react-native-reanimated";
import { PanGestureHandler } from "react-native-gesture-handler";

function clamp(value: any, lowerBound: any, upperBound: any) {
  "worklet";
  return Math.max(lowerBound, Math.min(value, upperBound));
}

type CircleProps = {
  color: string,
  radius: number,
  limits: { x: number, y: number },
}

const Circle = (props: CircleProps) => {
  const {radius, color, limits} = props;

  const boundX = limits.x - radius * 2;
  const boundY = limits.y - radius * 2;

  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      ctx.offsetX = translateX.value;
      ctx.offsetY = translateY.value;
    },
    onActive: (event, ctx) => {
      translateX.value = clamp(ctx.offsetX + event.translationX, 0, boundX);
      translateY.value = clamp(ctx.offsetY + event.translationY, 0, boundY);
    },
    onEnd: (event) => {
      translateX.value = withDecay({
        velocity: event.velocityX,
        clamp: [0, boundX]
      });
      translateY.value = withSpring(translateY.value + 1 , {
        velocity: event.velocityY,
        clamp: [0, boundY]
      });
    }
  });

  const style = useAnimatedStyle(() => ({
    position: "absolute",
    width: radius * 2,
    height: radius * 2,
    borderRadius: radius,
    backgroundColor: color,
    alignItems: "center",
    justifyContent: "center",
    transform: [
      {translateX: translateX.value},
      {translateY: translateY.value},
    ]
  }))

  return (
    <PanGestureHandler {...{onGestureEvent}}>
      <Animated.View {...{style}}>
        <Text style={{color: "white"}}>XD</Text>
      </Animated.View>
    </PanGestureHandler>
  )
}

export default Circle;
