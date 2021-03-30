import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';
const CategoryGridTile = (props) => {
  let Touchablecmp = TouchableOpacity;
  if (Platform.OS === 'android' && Platform.Version >= 21) {
    Touchablecmp = TouchableNativeFeedback;
  }
  return (
    //<View is added to show proper design on android after setting different touchable component depends on platform and for ios style={{flex: 1}} to Touchablecmp
    <View style={styles.gridItem}>
      <Touchablecmp style={{flex: 1}} onPress={props.onSelect}>
        <View style={{...styles.container, ...{backgroundColor: props.color}}}>
          <Text style={styles.title} numberOfLines={2}>
            {props.title}
          </Text>
        </View>
      </Touchablecmp>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
  },
  container: {
    flex: 1,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 22,
    textAlign: 'right',
  },
});

export default CategoryGridTile;
