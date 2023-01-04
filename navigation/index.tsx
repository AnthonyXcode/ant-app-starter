import BadgeScreen from '../screens/BadgeScreen'
import ButtonScreen from '../screens/ButtonScreen'
import ColorScreen from '../screens/ColorScreen'
import DesignSystemScreen from '../screens/DesignSystemScreen'
import FormScreen from '../screens/FormScreen'
import InputChipScreen from '../screens/InputChipScreen'
import RowScreen from '../screens/RowScreen'
import TextScreen from '../screens/TextScreen'
import TypographyScreen from '../screens/TypographyScreen'
import { AlertScreen } from '@screens/AlertScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { linking } from './LinkingConfiguration'
import { NavigationContainer } from '@react-navigation/native'
import { StackParamList } from './types'

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<StackParamList>()

export const Navigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name='DesignSystem' component={DesignSystemScreen} options={{ title: 'Design System' }} />
        <Stack.Screen name='Typography' component={TypographyScreen} options={{ title: 'Typography' }} />
        <Stack.Screen name='Row' component={RowScreen} options={{ title: 'Row' }} />
        <Stack.Screen name='Text' component={TextScreen} options={{ title: 'Text' }} />
        <Stack.Screen name='Color' component={ColorScreen} />
        <Stack.Screen name='Button' component={ButtonScreen} />
        <Stack.Screen name='InputChip' component={InputChipScreen} />
        <Stack.Screen name='Badge' component={BadgeScreen} />
        <Stack.Screen name='Form' component={FormScreen} />
        <Stack.Screen name='Alert' component={AlertScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
