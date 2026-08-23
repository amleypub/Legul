// AsyncStorage è un modulo nativo: nei test va sostituito con la finta
// implementazione in memoria fornita dal pacchetto stesso.
jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock')
);

// expo-audio richiede il modulo nativo: fuori dall'app non esiste.
jest.mock('expo-audio', () => ({
  createAudioPlayer: () => ({ play: jest.fn(), seekTo: jest.fn(), remove: jest.fn() }),
  setAudioModeAsync: jest.fn(() => Promise.resolve()),
}));

// expo-notifications richiede il modulo nativo: nei test basta un guscio.
jest.mock('expo-notifications', () => ({
  setNotificationHandler: jest.fn(),
  getPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  requestPermissionsAsync: jest.fn(() => Promise.resolve({ status: 'granted' })),
  scheduleNotificationAsync: jest.fn(() => Promise.resolve('id')),
  cancelScheduledNotificationAsync: jest.fn(() => Promise.resolve()),
  SchedulableTriggerInputTypes: { DAILY: 'daily' },
}));
