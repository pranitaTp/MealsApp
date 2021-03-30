import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {HeaderButton} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';
import {Platform} from 'react-native';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialIcons}
      iconSize={23}
      color={Platform.OS === 'android' ? 'white' : Colors.primaryColor}
    />
  );
};

export default CustomHeaderButton;
