import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screens/HomeScreen';
import ClassScren from './screens/ClassScren';
import VideoScreen from './screens/Video';
import Interpreters from './screens/Interpreters';
import InterpretersProfile from './screens/InterpretersProfile';
import ReviewScreen from './screens/ReviewScreen';
import WriteReview from './screens/WriteReview';
import Appoinment from './screens/Appoinment';
import PaymentMethod from './screens/PaymentMethod';
import DataCard from './screens/DataCard';
import PaymentComplete from './screens/PaymentComplete';
import Translator from './screens/Translator';

const StackNavigator = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Class' component={ClassScren} options={{ headerShown: false }}/>
            <Stack.Screen name='Video' component={VideoScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Interpreters' component={Interpreters} options={{ headerShown: false }}/>
            <Stack.Screen name='Profile' component={InterpretersProfile} options={{ headerShown: false }}/>
            <Stack.Screen name='Reviews' component={ReviewScreen} options={{ headerShown: false }}/>
            <Stack.Screen name='Write' component={WriteReview} options={{ headerShown: false }}/>
            <Stack.Screen name='Appoinment' component={Appoinment} options={{ headerShown: false }}/>
            <Stack.Screen name='PaymentMethod' component={PaymentMethod} options={{ headerShown: false }}/>
            <Stack.Screen name='DataCard' component={DataCard} options={{ headerShown: false }}/>
            <Stack.Screen name='Complete' component={PaymentComplete} options={{ headerShown: false }}/>
            <Stack.Screen name='Translate' component={Translator} options={{ headerShown: false }}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator
