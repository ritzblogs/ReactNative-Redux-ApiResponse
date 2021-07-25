import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../src/HomeScreen';


const Stack = createStackNavigator();

const AuthStack = () => {
  
  return (
    <Stack.Navigator  
    initialRouteName={"HomeScreen"}
  >

<    Stack.Screen name={"HomeScreen"} component={HomeScreen} options={{ headerShown: false }} />


    </Stack.Navigator>
  


   
  );
};



export default AuthStack;


