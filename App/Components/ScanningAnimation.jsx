import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import * as animationLoading from '../Assets/Animations/loading.json';

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

  return (
    <View style={styles.container}>
      <View style={{ width: radius * 2, height: radius * 2 }}>
        <LottieView
          source={animationLoading}
          style={StyleSheet.absoluteFillObject}
          autoPlay
        />
        <View style={[StyleSheet.absoluteFillObject, styles.text]}>
          <Text style={styles.text}>Scanning</Text>
          <Text style={styles.text}>your meal</Text>
        </View>
      </View>
    </View>
  );
}
