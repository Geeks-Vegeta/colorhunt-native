import * as React from 'react';
import { MD3LightTheme as DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { StatusBar } from 'react-native';
import Navigator from './app/screens/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    secondary: 'black',
  },
};

export default function App() {
  const Stack = createStackNavigator();

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
          <StatusBar/>
          <Navigator/>
      </NavigationContainer>
       
    </PaperProvider>

  );
}