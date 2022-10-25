import useCachedResources from './hooks/useCachedResources'
import useColorScheme from './hooks/useColorScheme'
import { Navigator } from './navigation'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { redux } from '@starter'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
const { store, persistor } = redux({ reducers: {} })

export default function App() {
  const isLoadingComplete = useCachedResources()
  const colorScheme = useColorScheme()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SafeAreaProvider>
            <Navigator />
            <StatusBar />
          </SafeAreaProvider>
        </PersistGate>
      </Provider>
    )
  }
}
