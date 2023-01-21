//import StaturBar from 'expo-status-bar'
import { StatusBar } from 'react-native';
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold
} from '@expo-google-fonts/inter'

import './src/lib/dayjs'
import { Loading } from './src/components/Loading';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold
  })

  //prevent the initilization of the app without the custom fonts
  if (!fontsLoaded) {
    return <Loading/>
  }

  return (
    <>
      <Routes/>
      <StatusBar barStyle={'light-content'} backgroundColor="transparent" translucent/>
    </>
  );
}