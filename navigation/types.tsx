import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type StackParamList = {
  Typography: undefined
  DesignSystem: undefined
  Row: undefined
  Text: undefined
  Color: undefined
  Button: undefined
  InputChip: undefined
  Badge: undefined
  Form: undefined
}

export type StackScreenProps<Screen extends keyof StackParamList> = NativeStackScreenProps<
  StackParamList,
  Screen
>
