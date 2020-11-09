import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Character from './src/screens/Character'
import Basic from './src/screens/Basic'
import Attributes from './src/screens/Attributes'
import Spells from './src/screens/Spells'
import Info from './src/screens/Info'
import Inventory from './src/screens/Inventory'
import History from './src/screens/History'
import { Provider } from 'react-redux';
import { store } from './src/redux/store' 

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>          
          <Tab.Screen name="Basic" component={Basic} />
          <Tab.Screen name="Attributes" component={Attributes} />
          <Tab.Screen name="Spells" component={Spells} />
          <Tab.Screen name="Info" component={Info} />
          <Tab.Screen name="Inventory" component={Inventory} />
          <Tab.Screen name="History" component={History} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App
