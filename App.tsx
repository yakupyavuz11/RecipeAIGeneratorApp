import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/HomeScreen';
import SettingsScreen from './src/SettingsScreen';
import RecipeDetailScreen from './src/RecipeDetailScreen';
import { Home, Settings } from 'lucide-react-native';
import { View, StyleSheet } from 'react-native';
import TermOfService from './src/TermOfService';
import PrivacyPolicy from './src/PrivacyPolicy';
import HowToUse from './src/HowToUse';

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();
// Stack Navigator
const Stack = createStackNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: '#81C784',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarStyle: {
          position: "absolute",
          bottom: 20,
          marginHorizontal: 15,
          backgroundColor: "#2A2A2A",
          borderRadius: 15,
          height: 60,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
          elevation: 5,
        },
        headerStyle: {
          backgroundColor: '#1E1E1E',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarIcon: ({ color, size }) => {
          let IconComponent;
          if (route.name === 'Home') {
            IconComponent = Home;
          } else if (route.name === 'Settings') {
            IconComponent = Settings;
          }
          return (
            <View style={styles.iconContainer}>
              <IconComponent color={color} size={30} />  {/* Sabit boyut */}
            </View>
          );
        },
        
      })}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: 'Cook Assistant' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: 'Settings' }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="BottomTabs"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#FFFFFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="BottomTabs"
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RecipeDetail"
          component={RecipeDetailScreen}
          options={{ title: 'Recipe Details' }}
        />
        <Stack.Screen
          name="TermOfService"
          component={TermOfService}
          options={{ title: 'Terms of Service' }}
        />
        <Stack.Screen
          name="PrivacyPolicy"
          component={PrivacyPolicy}
          options={{ title: 'Privacy Policy' }}
        />
        <Stack.Screen
          name="HowToUse"
          component={HowToUse}
          options={{ title: 'How to Use' }}
        />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
