import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Dimensions,
  Modal,
  Text,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import colors from '../Constants/colors';
import ScanningAnimation from './ScanningAnimation';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2.5,
    height: width / 2.5,
    borderRadius: 100,
    backgroundColor: colors.background,
    shadowColor: colors.dark,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.greenOpacity,
  },
  modal: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    borderRadius: 15,
    width: width / 1.3,
    height: width / 1.3,
  },
  text: {
    fontFamily: 'PoppinsMedium',
    fontSize: 25,
    color: colors.orange,
  },
});

export default function ScanButton({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleDisplayScanResult = () => {
    setModalVisible(false);
    navigation.navigate('ScanResult');
  };
  return (
    <>
      <Modal transparent animationType='fade' visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <ScanningAnimation radius={width / 3} />
            <TouchableOpacity onPress={() => handleDisplayScanResult()}>
              <Text>Close modal</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setModalVisible(true)}
          style={styles.button}
        >
          <Ionicons name='scan-sharp' size={100} color={colors.green} />
        </TouchableOpacity>
      </View>
    </>
  );
}
