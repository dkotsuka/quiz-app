import React from 'react';
import {NavigationContainer, DefaultTheme, Theme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { MainScreen } from './src/pages/MainScreen';
import { QuestionScreen, ResultScreen, ScreenNames } from './src/pages';
import { SessionProvider } from './src/providers/SessionProvider';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const AppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    card: '#343C58',
    text: '#FFFFFF',
  },
};

const App = () => {
  return (
    <SessionProvider>
      <StatusBar barStyle="light-content"/>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator initialRouteName={ScreenNames.MAIN_SCREEN}>
          <Stack.Screen name={ScreenNames.MAIN_SCREEN} component={MainScreen} options={{title: "Quiz App"}}/>
          <Stack.Screen name={ScreenNames.QUESTION_SCREEN} component={QuestionScreen} />
          <Stack.Screen name={ScreenNames.RESULT_SCREEN} component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionProvider>
  );
};

export default App;
