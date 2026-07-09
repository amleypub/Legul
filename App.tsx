import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { GamificationProvider } from './src/gamification/GamificationContext';
import type { RootStackParamList } from './src/navigation/types';
import HomeScreen from './src/screens/HomeScreen';
import QuizListScreen from './src/screens/QuizListScreen';
import QuizScreen from './src/screens/QuizScreen';
import QuizResultScreen from './src/screens/QuizResultScreen';
import TracceScreen from './src/screens/TracceScreen';
import TracciaDetailScreen from './src/screens/TracciaDetailScreen';
import MaterialeScreen from './src/screens/MaterialeScreen';
import { colors } from './src/theme';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function tabIcon(name: keyof typeof Ionicons.glyphMap, outline: keyof typeof Ionicons.glyphMap) {
  return ({ focused, color }: { focused: boolean; color: string }) => (
    <Ionicons name={focused ? name : outline} size={22} color={color} />
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.primary },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: { fontWeight: '700' },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Legul',
          tabBarLabel: 'Home',
          tabBarIcon: tabIcon('home', 'home-outline'),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizListScreen}
        options={{ title: 'Quiz', tabBarIcon: tabIcon('help-circle', 'help-circle-outline') }}
      />
      <Tab.Screen
        name="Tracce"
        component={TracceScreen}
        options={{
          title: 'Tracce anni passati',
          tabBarLabel: 'Tracce',
          tabBarIcon: tabIcon('document-text', 'document-text-outline'),
        }}
      />
      <Tab.Screen
        name="Materiale"
        component={MaterialeScreen}
        options={{
          title: 'Materiale per l’esame',
          tabBarLabel: 'Materiale',
          tabBarIcon: tabIcon('cart', 'cart-outline'),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <GamificationProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: colors.primary },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: '700' },
          }}
        >
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="QuizGame"
            component={QuizScreen}
            options={({ route }) => ({ title: route.params.materia })}
          />
          <Stack.Screen
            name="QuizResult"
            component={QuizResultScreen}
            options={{ title: 'Risultato', headerBackVisible: false }}
          />
          <Stack.Screen
            name="TracciaDetail"
            component={TracciaDetailScreen}
            options={{ title: 'Traccia d’esame' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GamificationProvider>
  );
}
