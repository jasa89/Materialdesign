import React from 'react';
import { Appbar } from 'react-native-paper';
import type { NativeStackHeaderProps } from '@react-navigation/native-stack';

const CustomAppbar = ({ navigation, back, options, route }: NativeStackHeaderProps) => {

  return (
    <Appbar.Header mode="center-aligned" elevated>
      
      {/* Left arrow (back) only if there is a previous screen */}
      {back ? (
        <Appbar.BackAction onPress={() => navigation.goBack()} />
      ) : null}

      {/* Title */}
      <Appbar.Content title={options.title}
      style= {{alignItems:'flex-start'}}   />

      {/* Right arrow only on HomeScreen */}
      {route.name === 'Home' ? (
        <Appbar.Action
          icon="arrow-right"
          onPress={() => navigation.navigate('SecondScreen')}
        />
      ) : null}

    </Appbar.Header>
  );
};

export default CustomAppbar;