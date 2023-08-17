import React from 'react';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';

import Router from './routes';

function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default App;
