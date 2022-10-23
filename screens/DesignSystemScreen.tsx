import { colors, Row, size } from '@starter'
import { Entypo } from '@expo/vector-icons'
import { FlatList, StyleSheet, View } from 'react-native'
import { StackParamList, StackScreenProps } from '../navigation/types'


export default function DesignSystemScreen({ navigation }: StackScreenProps<'DesignSystem'>) {
  const sections = [
    { id: 'Text', title: 'Text' },
    { id: 'Color', title: 'Color' },
    { id: 'Button', title: 'Button' },
    { id: 'InputChip', title: 'Input Chip' },
    { id: 'Badge', title: 'Badge' },
    { id: 'Form', title: 'Form' },
    { id: 'Row', title: 'Row' },
  ]
  return (
    <View style={styles.container}>
      <FlatList
        data={sections}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Row
              title={item.title}
              onPress={() => navigation.navigate(item.id as keyof StackParamList)}
              rightIcon={<Entypo name='chevron-small-right' size={size[5]} color={colors.gray800} />}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
