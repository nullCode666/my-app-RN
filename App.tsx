
import { NavigationContainer } from '@react-navigation/native';
import Routers from './src/routers';
import SplashScreen from "react-native-splash-screen";
import BackgroundVideo from '@/components/BackgroundVideo';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useEffect } from 'react';
import { Image, StyleSheet } from 'react-native';



export default function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Routers />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}