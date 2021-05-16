import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';

import colors from '../Constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  text: {
    marginLeft: 15,
    fontFamily: 'PoppinsRegular',
    fontSize: 15,
    color: colors.green,
  },
});

export default function RadioButton({ text, checked, activeCheck }) {
  const favoriteActivated = () => {
    if (checked) {
      return <Circle cx='50' cy='50' r='30' fill={colors.orange} />;
    }
    return null;
  };

  return (
    <TouchableWithoutFeedback onPress={activeCheck}>
      <View style={styles.container}>
        <Svg height={20} width={20} viewBox='0 0 100 100'>
          <Circle
            cx='50'
            cy='50'
            r='45'
            stroke={colors.green}
            strokeWidth='7'
            fill='transparent'
          />
          {favoriteActivated()}
        </Svg>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
