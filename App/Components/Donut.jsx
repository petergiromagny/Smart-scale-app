import React, { useRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Animated,
  Easing,
  TextInput,
} from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsMedium',
    textAlign: 'center',
  },
});

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut(props) {
  const { kcal, objKcal, color, radius, strokeWidth, donutAnimated } = props;
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  // Init ref target component for animation
  const animated = useRef(new Animated.Value(0)).current;
  const circleRef = useRef();
  const inputRef = useRef();

  // Create animation
  const animation = (toValue, duration, delay) =>
    Animated.timing(animated, {
      toValue,
      duration,
      delay,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();

  // Active animation when screen is loaded
  useEffect(() => {
    if (donutAnimated) {
      animation(kcal, 1000, 250);
    } else {
      animation(kcal, 0, 0);
    }
    animated.addListener(
      (v) => {
        const maxKcal = (100 * v.value) / objKcal;
        const strokeDashoffset =
          circumference - (circumference * maxKcal) / 100;
        if (inputRef?.current) {
          inputRef.current.setNativeProps({
            text: `${Math.round(v.value)}`,
          });
        }
        if (circleRef?.current) {
          circleRef.current.setNativeProps({
            strokeDashoffset,
          });
        }
      },
      [objKcal, kcal]
    );
    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View
      style={{
        width: halfCircle * 2,
        height: halfCircle * 2,
        marginBottom: 10,
      }}
    >
      <Svg
        height={halfCircle * 2}
        width={halfCircle * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
      >
        <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            cx='50%'
            cy='50%'
            r={radius}
            stroke={color}
            fill='transparent'
            strokeWidth={strokeWidth}
            strokeLinejoin='round'
            strokeOpacity='.1'
          />

          <AnimatedCircle
            ref={circleRef}
            cx='50%'
            cy='50%'
            r={radius}
            stroke={color}
            fill='transparent'
            strokeWidth={strokeWidth}
            strokeLinecap='round'
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
        </G>
      </Svg>
      <View
        style={[
          StyleSheet.absoluteFillObject,
          {
            top: radius - radius / 2.8,
            left: halfCircle - radius - strokeWidth,
          },
        ]}
      >
        <AnimatedTextInput
          ref={inputRef}
          underlineColorAndroid='transparent'
          editable={false}
          defaultValue='0'
          style={[{ fontSize: radius / 2.8, color }, styles.text]}
        />
        <Text style={[{ fontSize: radius / 2.8, color }, styles.text]}>
          kcal
        </Text>
      </View>
    </View>
  );
}
