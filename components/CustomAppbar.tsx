
import React from 'react';
import { Appbar } from 'react-native-paper';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const CustomAppbar: React.FC<NativeStackHeaderProps> = ({ navigation, back, options }) => {
  return (
    <Appbar.Header mode="center-aligned" elevated>
      
      {/* Show back button only if there's a previous screen */}
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}

      {/* Screen title comes from Stack.Screen options */}
      <Appbar.Content title={options.title} />

      {/* Add header actions here if needed */}
      {/* <Appbar.Action icon="dots-vertical" onPress={() => {}} /> */}

    </Appbar.Header>
  );
};

export default CustomAppbar;