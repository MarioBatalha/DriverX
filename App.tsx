import React from 'react';
import { View } from 'react-native';
import Login from './src/pages/Login';
import Driver from './src/pages/User/driver.tsx';
import Passenger from './src/pages/User/passenger.tsx';
import Type from './src/pages/User/type.tsx';
import Ride from './src/pages/Ride';
import Home from './src/pages/Home';


const App = () =>  {
  return (
    <View >
      <Home />
    </View>
  );
}

export default App;