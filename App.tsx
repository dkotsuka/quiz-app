import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { MainScreen } from './src/pages/MainScreen';
import { QuestionScreen, ResultScreen, ScreenNames } from './src/pages';
import { SessionProvider } from './src/providers/SessionProvider';

const Stack = createStackNavigator();

const App = () => {
  return (
    <SessionProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={ScreenNames.MAIN_SCREEN} component={MainScreen} options={{title: "Quiz App"}}/>
          <Stack.Screen name={ScreenNames.QUESTION_SCREEN} component={QuestionScreen} />
          <Stack.Screen name={ScreenNames.RESULT_SCREEN} component={ResultScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SessionProvider>
  );
};

export default App;
