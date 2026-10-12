import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AddDishScreen from './components/AddDishScreen';
import { MenuItem } from './components/MenuItem';

const Stack = createNativeStackNavigator();

// Chef's Menu Manager - Part 2
// The array of menu items is held in state here, at the application level,
// and passed to each screen (as planned in Part 1, section 5).
export default function App() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);

  // Adds a new dish to the array. Because menuItems is state,
  // the home screen updates automatically.
  const addMenuItem = (item: MenuItem) => {
    setMenuItems((currentItems) => [...currentItems, item]);
  };

  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      {/* Each screen draws its own title bar to match the Part 1 wireframes */}
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} menuItems={menuItems} />}
        </Stack.Screen>
        <Stack.Screen name="AddDish">
          {(props) => <AddDishScreen {...props} onAddItem={addMenuItem} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
