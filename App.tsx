import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { Navigator } from './navigation'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <SafeAreaProvider>
        <Navigator />
        <StatusBar />
      </SafeAreaProvider>
    )
  }
}
