import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Signup from './components/SignUpScreen';
import Login from './components/Login';
import NewAccount from './components/NewAccount';
import MainTab from './components/MainTab';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';
import Tab4 from './components/Tab4';
import Tab5 from './components/Tab5';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="NewAccount" component={NewAccount} />
        <Stack.Screen name="MainTab" component={MainTab} />
        <Stack.Screen name="Tab2" component={Tab2} />
        <Stack.Screen name="Tab3" component={Tab3} />
        <Stack.Screen name="Tab4" component={Tab4} />
        <Stack.Screen name="Tab5" component={Tab5} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
