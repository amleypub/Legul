import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { applyGlobalFont, fontMap } from './src/fonts';
import { GamificationProvider } from './src/gamification/GamificationContext';

applyGlobalFont();
import type { RootStackParamList } from './src/navigation/types';
import HomeScreen from './src/screens/HomeScreen';
import QuizHomeScreen from './src/screens/QuizHomeScreen';
import PercorsoScreen from './src/screens/PercorsoScreen';
import LezioneScreen from './src/screens/LezioneScreen';
import EsitoLezioneScreen from './src/screens/EsitoLezioneScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import TracceScreen from './src/screens/TracceScreen';
import TracciaDetailScreen from './src/screens/TracciaDetailScreen';
import MaterialeScreen from './src/screens/MaterialeScreen';
import ProfiloScreen from './src/screens/ProfiloScreen';
import LoginScreen from './src/screens/LoginScreen';
import { colors, materiaColors } from './src/theme';

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
        component={QuizHomeScreen}
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
      <Tab.Screen
        name="Profilo"
        component={ProfiloScreen}
        options={{ headerShown: false, tabBarIcon: tabIcon('person', 'person-outline') }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts(fontMap);
  if (!fontsLoaded) return null;
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
            name="Percorso"
            component={PercorsoScreen}
            options={({ route }) => ({
              title: route.params.materia,
              headerStyle: { backgroundColor: materiaColors[route.params.materia].end },
            })}
          />
          <Stack.Screen name="Lezione" component={LezioneScreen} options={{ headerShown: false }} />
          <Stack.Screen
            name="EsitoLezione"
            component={EsitoLezioneScreen}
            options={{ headerShown: false, gestureEnabled: false }}
          />
          <Stack.Screen
            name="Paywall"
            component={PaywallScreen}
            options={{ headerShown: false, presentation: 'modal' }}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false, presentation: 'modal' }}
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
