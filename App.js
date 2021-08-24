import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IndexScreen from './src/screens/IndexScreen';
import Cart from './src/screens/Cart';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import ProductDetails from './src/screens/ProductDetails';
import ProductList from './src/screens/ProductList';
import ConfirmOrder from './src/screens/ConfirmOrder';
import React from 'react';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SignupScreen">
      <Stack.Screen name="SignupScreen" component={SignupScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
        <Stack.Screen name="IndexScreen" component={IndexScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;