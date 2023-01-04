import * as Linking from 'expo-linking'

export const linking = {
  prefixes: [Linking.makeUrl('/')],
  path: 'designSystem',
  screens: {
    DesignSystem: '/',
    Typography: 'typography',
    Row: 'row',
    Text: 'text',
    Color: 'color',
    Button: 'button',
    InputChip: 'inputChip',
    Badge: 'badge',
    Form: 'form',
    Alert: 'alert'
  },
}
