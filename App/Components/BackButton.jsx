import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    width: 35,
    height: 35,
    borderRadius: 50,
    opacity: 0.9,
    position: 'relative',
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default function BackButton() {
  return (
    <View style={styles.container}>
      <Svg width='75%' height='75%' viewBox='0 0 110 100'>
        <Path
          fill={colors.background}
          d='M68.82,98a9.54,9.54,0,0,1-6.63-2.67L26.12,60.53a14.62,14.62,0,0,1,0-21.06L62.19,4.67A9.54,9.54,0,0,1,75.44,18.41L42.69,50,75.44,81.59A9.54,9.54,0,0,1,68.82,98Z'
        />
      </Svg>
    </View>
  );
}
