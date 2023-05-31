import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ClassScren from './screens/ClassScren';
import Video from './screens/Video';


const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Class' component={ClassScren} options={{ headerShown: false }}/>
            <Stack.Screen name='Video' component={Video} options={{ headerShown: false }}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
