import React from 'react';
import { Text } from 'react-native';
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

function tabIcon(emoji: string) {
  return ({ focused }: { focused: boolean }) => (
    <Text style={{ fontSize: 20, opacity: focused ? 1 : 0.5 }}>{emoji}</Text>
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
        options={{ title: 'Legul ⚖️', tabBarLabel: 'Home', tabBarIcon: tabIcon('🏠') }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizListScreen}
        options={{ title: 'Quiz', tabBarIcon: tabIcon('❓') }}
      />
      <Tab.Screen
        name="Tracce"
        component={TracceScreen}
        options={{ title: 'Tracce anni passati', tabBarLabel: 'Tracce', tabBarIcon: tabIcon('📜') }}
      />
      <Tab.Screen
        name="Materiale"
        component={MaterialeScreen}
        options={{
          title: 'Materiale per l’esame',
          tabBarLabel: 'Materiale',
          tabBarIcon: tabIcon('🛒'),
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
