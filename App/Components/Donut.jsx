import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { Circle, G } from 'react-native-svg';

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsMedium',
    textAlign: 'center',
  },
});

export default function Donut(props) {
  const { kcal, objKcal, color } = props;
  const radius = 45;
  const strokeWidth = 10;
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;
  const maxKcal = (100 * kcal) / objKcal;

  const strokeDashoffset = circumference - (circumference * maxKcal) / 100;

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
            strokeLinecap='round'
            strokeDashoffset={strokeDashoffset}
            strokeDasharray={circumference}
          />
          <View
            style={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              top: '50%',
            }}
          >
            <Text style={[{ fontSize: radius / 2.8, color }, styles.text]}>
              {kcal}
            </Text>
            <Text style={[{ fontSize: radius / 2.8, color }, styles.text]}>
              kcal
            </Text>
          </View>
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
        </G>
      </Svg>
    </View>
  );
}
