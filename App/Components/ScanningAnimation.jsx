import React, { useRef } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Svg, { G, Circle } from 'react-native-svg';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: 25,
    color: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function ScanningAnimation(props) {
  const { radius } = props;

  const circleRef = useRef();

  const strokeWidth = 10;
  const halfCircle = radius + strokeWidth;
  // const circumference = 2 * Math.PI * radius;
  const dashArray = 125;
  const color = colors.orange;

  return (
    <View style={styles.container}>
      <View style={{ width: radius * 2, height: radius * 2 }}>
        <Svg
          height={radius * 2}
          width={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <G rotation='-90' origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              ref={circleRef}
              cx='50%'
              cy='50%'
              r={radius}
              fill='transparent'
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinecap='round'
              strokeDashoffset={220}
              strokeDasharray={dashArray}
            />
            <Circle
              cx='50%'
              cy='50%'
              r={radius}
              fill='transparent'
              stroke={color}
              strokeWidth={strokeWidth}
              strokeLinejoin='round'
              strokeOpacity='.1'
            />
          </G>
        </Svg>
        <View style={[StyleSheet.absoluteFillObject, styles.text]}>
          <Text style={styles.text}>Scanning</Text>
          <Text style={styles.text}>your meal</Text>
        </View>
      </View>
    </View>
  );
}
