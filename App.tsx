import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo-blur';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { applyGlobalFont, fontMap } from './src/fonts';
import { configuraNotifiche } from './src/notifiche/promemoria';
import { AuthProvider } from './src/auth/AuthContext';
import { GamificationProvider } from './src/gamification/GamificationContext';

applyGlobalFont();
configuraNotifiche();
import type { RootStackParamList } from './src/navigation/types';
import { linking } from './src/navigation/linking';
import HomeScreen from './src/screens/HomeScreen';
import QuizHomeScreen from './src/screens/QuizHomeScreen';
import PercorsoScreen from './src/screens/PercorsoScreen';
import LezioneScreen from './src/screens/LezioneScreen';
import RipassoScreen from './src/screens/RipassoScreen';
import EsitoLezioneScreen from './src/screens/EsitoLezioneScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import TracceScreen from './src/screens/TracceScreen';
import TracciaDetailScreen from './src/screens/TracciaDetailScreen';
import MaterialeScreen from './src/screens/MaterialeScreen';
import ProfiloScreen from './src/screens/ProfiloScreen';
import LoginScreen from './src/screens/LoginScreen';
import DiscussioneScreen from './src/screens/DiscussioneScreen';
import EsameScreen from './src/screens/EsameScreen';
import SvolgimentoScreen from './src/screens/SvolgimentoScreen';
import SimulatoreScreen from './src/screens/SimulatoreScreen';
import CasoPraticoScreen from './src/screens/CasoPraticoScreen';
import ComunitaScreen from './src/screens/ComunitaScreen';
import DocumentoLegaleScreen from './src/screens/DocumentoLegaleScreen';
import { DOCUMENTI } from './src/data/legale';
import { ConfineErrori } from './src/components/ConfineErrori';
import { Icona } from './src/components/Icona';
import { Sfondo } from './src/components/Sfondo';
import { alpha, colors, SFOCATURA } from './src/theme';

/**
 * Le schermate devono lasciar vedere il fondale che sta sotto la
 * navigazione: senza questo tema React Navigation dipinge il proprio
 * bianco opaco su ogni schermata e la velatura non si vede mai.
 */
const TEMA_TRASPARENTE = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, background: 'transparent', card: 'transparent' },
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

/**
 * Icona di una tab. Lucide è un set di soli contorni, quindi la
 * differenza fra tab attiva e inattiva non passa più dal glifo pieno ma
 * dallo spessore del tratto e dal colore: la tab attiva ha un tratto
 * più marcato, che a queste dimensioni si legge meglio del riempimento.
 */
function tabIcon(nome: string) {
  return ({ focused, color }: { focused: boolean; color: string }) => (
    <Icona nome={nome} size={22} color={color} strokeWidth={focused ? 2.4 : 1.8} />
  );
}

/**
 * Fondo della barra dei tab.
 *
 * È l'unico elemento sempre a schermo: se resta bianco pieno mentre
 * tutto il resto è traslucido, diventa la cosa più opaca dell'app
 * proprio nel punto in cui l'occhio torna più spesso. Sul web la
 * sfocatura nativa non c'è e il riempimento traslucido fa da solo.
 */
function FondoTab() {
  return (
    <View style={StyleSheet.absoluteFill}>
      {Platform.OS !== 'web' && (
        <BlurView intensity={SFOCATURA} tint="light" style={StyleSheet.absoluteFill} />
      )}
      <View style={[StyleSheet.absoluteFill, { backgroundColor: alpha.vetroChrome }]} />
    </View>
  );
}

function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        /*
          Fondo pieno sotto le schermate a tab.
          
          Era trasparente, e siccome la navigazione tiene montata anche la
          scheda precedente il risultato era che dal Profilo si leggeva la
          Home in trasparenza, titolo sopra titolo. Ogni schermata dipinge
          comunque il proprio fondale con `Sfondo`: questo colore è la
          rete di sicurezza per quando se ne aggiungerà una che non lo fa.
        */
        sceneStyle: { backgroundColor: colors.background },
        // Le schermate a tab hanno già il proprio titolo nel contenuto:
        // una barra piena sopra ripeteva l'informazione e rubava spazio.
        headerShown: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: '#9AA3B4',
        // Solo colori e bordo: altezze e spaziature restano quelle
        // calcolate dalla navigazione, che tiene conto della safe area.
        // Ogni valore imposto a mano qui finisce per tagliare le
        // etichette su qualche dispositivo.
        // Il riempimento sta anche qui e non solo in `tabBarBackground`:
        // quello è un componente reso dietro la barra, e dove non arriva
        // — sul web, per esempio — resterebbe solo il vuoto, con il
        // contenuto che scorre sotto e le etichette illeggibili.
        tabBarBackground: () => <FondoTab />,
        tabBarStyle: {
          borderTopWidth: StyleSheet.hairlineWidth * 1.5,
          borderTopColor: alpha.bordo,
          backgroundColor: alpha.vetroChrome,
          position: 'absolute',
          elevation: 0,
        },
        tabBarLabelStyle: { fontWeight: '700', letterSpacing: -0.2, fontSize: 11.5 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Legul',
          tabBarLabel: 'Home',
          tabBarIcon: tabIcon('home'),
        }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizHomeScreen}
        options={{ title: 'Quiz', tabBarIcon: tabIcon('help-circle') }}
      />
      <Tab.Screen
        name="Tracce"
        component={TracceScreen}
        options={{
          title: 'Tracce anni passati',
          tabBarLabel: 'Tracce',
          tabBarIcon: tabIcon('document-text'),
        }}
      />
      <Tab.Screen
        name="Materiale"
        component={MaterialeScreen}
        options={{
          title: 'Materiale per l’esame',
          tabBarLabel: 'Materiale',
          tabBarIcon: tabIcon('cart'),
        }}
      />
      <Tab.Screen
        name="Profilo"
        component={ProfiloScreen}
        options={{ headerShown: false, tabBarIcon: tabIcon('person') }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  const [fontsLoaded] = useFonts(fontMap);
  if (!fontsLoaded) return null;
  return (
    // Fuori da tutto: deve poter intercettare anche gli errori dei provider.
    <ConfineErrori>
    <AuthProvider>
      <GamificationProvider>
      <Sfondo>
      <NavigationContainer linking={linking} theme={TEMA_TRASPARENTE}>
        <StatusBar style="dark" />
        {/*
          Intestazioni chiare, non più la fascia blu piena: su un
          linguaggio fatto di superfici traslucide su fondo chiaro una
          barra scura in cima taglia la schermata in due e sembra
          appartenere a un'altra app.
        */}
        <Stack.Navigator
          screenOptions={{
            contentStyle: { backgroundColor: 'transparent' },
            headerStyle: { backgroundColor: 'transparent' },
            headerTintColor: colors.text,
            headerShadowVisible: false,
            headerTitleStyle: { fontWeight: '800', fontSize: 17 },
          }}
        >
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="Percorso"
            component={PercorsoScreen}
            options={({ route }) => ({ title: route.params.materia })}
          />
          <Stack.Screen name="Lezione" component={LezioneScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Ripasso" component={RipassoScreen} options={{ headerShown: false }} />
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
          <Stack.Screen
            name="Svolgimento"
            component={SvolgimentoScreen}
            options={{ title: 'Svolgimento proposto' }}
          />
          <Stack.Screen
            name="Discussione"
            component={DiscussioneScreen}
            options={{ title: 'Discussione' }}
          />
          <Stack.Screen
            name="Esame"
            component={EsameScreen}
            options={{ title: 'Come funziona l’esame' }}
          />
          <Stack.Screen
            name="Simulatore"
            component={SimulatoreScreen}
            options={{ title: 'Caso pratico' }}
          />
          <Stack.Screen
            name="CasoPratico"
            component={CasoPraticoScreen}
            options={{ title: 'Simulazione' }}
          />
          <Stack.Screen
            name="Comunita"
            component={ComunitaScreen}
            options={{ title: 'Comunità' }}
          />
          <Stack.Screen
            name="DocumentoLegale"
            component={DocumentoLegaleScreen}
            options={({ route }) => ({
              title: DOCUMENTI[route.params.documento].titolo,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
      </Sfondo>
      </GamificationProvider>
    </AuthProvider>
    </ConfineErrori>
  );
}
