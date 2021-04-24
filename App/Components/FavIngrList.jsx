import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginTop: 65,
  },
  label: {
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'PoppinsMedium',
  },
});

export default function FavIngrList({ label }) {
  // const [dataList, setDataList] = useState([]);

  /* useEffect(() => {
    if (label.toLowerCase() === 'vegetable') {
      setDataList(vegetable);
    } else if (label.toLowerCase() === 'fruit') {
      setDataList(fruit);
    } else if (label.toLowerCase() === 'meat') {
      setDataList(meat);
    }
  }); */

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
}
