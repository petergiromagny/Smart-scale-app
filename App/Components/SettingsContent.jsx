import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import colors from '../Constants/colors';

const styles = StyleSheet.create({
  headerBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
  },
  containerIcon: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.green,
    borderRadius: 10,
    padding: 5,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontFamily: 'PoppinsMedium',
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'PoppinsRegular',
    fontSize: 12,
    color: colors.green,
  },
  box: {
    backgroundColor: '#C1C9C2',
    borderRadius: 10,
    padding: 10,
  },
});

export default function SettingsContent(props) {
  const { last, children, title, subtitle, icon } = props;
  return (
    <View style={last ? { marginBottom: 0 } : { marginBottom: 15 }}>
      <View style={styles.headerBox}>
        <View style={styles.containerIcon}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
      </View>
      <View style={styles.box}>{children}</View>
    </View>
  );
}
