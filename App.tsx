import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';

import CustomAppbar from './components/CustomAppbar';
import HomeScreen from './screens/HomeScreen';
import SecondScreen from './screens/SecondScreen';

export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"
        screenOptions={{
          header: (props) => <CustomAppbar {...props} />, 
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }}  />
        <Stack.Screen name="Details" component={SecondScreen}  options={{ title: 'Second Screen' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
